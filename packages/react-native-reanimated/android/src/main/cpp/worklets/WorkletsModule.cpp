#include <android/log.h>
#include <fbjni/fbjni.h>
#include <jsi/JSIDynamic.h>
#include <jsi/jsi.h>
#include <react/jni/JMessageQueueThread.h>
#include <react/jni/ReadableNativeArray.h>
#include <react/jni/ReadableNativeMap.h>
#ifdef RCT_NEW_ARCH_ENABLED
#include <react/fabric/Binding.h>
#endif

#include "WorkletRuntimeCollector.h"
#include "WorkletsModule.h"

namespace reanimated {

using namespace facebook;
using namespace react;

WorkletsModule::WorkletsModule(
    jni::alias_ref<WorkletsModule::javaobject> jThis,
    jsi::Runtime *rnRuntime,
    const std::string &valueUnpackerCode)
    : javaPart_(jni::make_global(jThis)),
      rnRuntime_(rnRuntime),
      nativeWorkletsModule_(std::make_shared<reanimated::NativeWorkletsModule>(
          valueUnpackerCode)) {}

jni::local_ref<WorkletsModule::jhybriddata> WorkletsModule::initHybrid(
    jni::alias_ref<jhybridobject> jThis,
    jlong jsContext,
    const std::string &valueUnpackerCode) {
  return makeCxxInstance(jThis, (jsi::Runtime *)jsContext, valueUnpackerCode);
}

void WorkletsModule::installJSIBindings() {
  jsi::Runtime &rnRuntime = *rnRuntime_;
  reanimated::WorkletRuntimeCollector::install(rnRuntime);
}

void WorkletsModule::registerNatives() {
  registerHybrid(
      {makeNativeMethod("initHybrid", WorkletsModule::initHybrid),
       makeNativeMethod(
           "installJSIBindings", WorkletsModule::installJSIBindings)});
}
} // namespace reanimated