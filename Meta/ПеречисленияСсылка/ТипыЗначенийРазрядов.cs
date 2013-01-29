
using System;
using V82;
using V82.ѕеречислени€;//—сылка;
namespace V82.ѕеречислени€//—сылка
{
	public enum “ипы«начений–азр€дов
	{
		ѕуста€—сылка = - 1,
		„исло = 0,
		—трока = 1,
	}
	public static partial class “ипы«начений–азр€дов_«начени€//:ѕеречисление—сылка
	{
		public static readonly Guid „исло = new Guid("9b3b97af-d434-8c05-4099-301d0d66db10");
		public static readonly Guid —трока = new Guid("3d7a1b8d-c045-035c-40b8-2ef2fec65e4b");
		public static “ипы«начений–азр€дов ѕолучить(this “ипы«начений–азр€дов «начение, byte[] —сылка)
		{
			return ѕолучить(«начение, new Guid(—сылка));
		}
		public static “ипы«начений–азр€дов ѕолучить(this “ипы«начений–азр€дов «начение, Guid —сылка)
		{
			if(—сылка == „исло)
			{
				return “ипы«начений–азр€дов.„исло;
			}
			else if(—сылка == —трока)
			{
				return “ипы«начений–азр€дов.—трока;
			}
			return “ипы«начений–азр€дов.ѕуста€—сылка;
		}
		public static byte[]  люч(this “ипы«начений–азр€дов «начение)
		{
			return —сылка(«начение).ToByteArray();
		}
		public static Guid —сылка(this “ипы«начений–азр€дов «начение)
		{
			switch («начение)
			{
				case “ипы«начений–азр€дов.„исло: return „исло;
				case “ипы«начений–азр€дов.—трока: return —трока;
			}
			return Guid.Empty;
		}
	}
}
