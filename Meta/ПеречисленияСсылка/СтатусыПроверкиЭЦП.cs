
using System;
using V82;
using V82.Перечисления;//Ссылка;
namespace V82.Перечисления//Ссылка
{
	public enum СтатусыПроверкиЭЦП
	{
		ПустаяСсылка = - 1,
		Валидна = 0,
		НеВалидна = 1,//Не валидна
	}
	public static partial class СтатусыПроверкиЭЦП_Значения//:ПеречислениеСсылка
	{
		public static readonly Guid Валидна = new Guid("e7bae292-5503-36cd-4f87-53193bc9fd6a");
		public static readonly Guid НеВалидна = new Guid("e2e97580-381f-740b-4174-fa842e1a4dc8");//Не валидна
		public static СтатусыПроверкиЭЦП Получить(this СтатусыПроверкиЭЦП Значение, byte[] Ссылка)
		{
			return Получить(Значение, new Guid(Ссылка));
		}
		public static СтатусыПроверкиЭЦП Получить(this СтатусыПроверкиЭЦП Значение, Guid Ссылка)
		{
			if(Ссылка == Валидна)
			{
				return СтатусыПроверкиЭЦП.Валидна;
			}
			else if(Ссылка == НеВалидна)
			{
				return СтатусыПроверкиЭЦП.НеВалидна;
			}
			return СтатусыПроверкиЭЦП.ПустаяСсылка;
		}
		public static byte[] Ключ(this СтатусыПроверкиЭЦП Значение)
		{
			return Ссылка(Значение).ToByteArray();
		}
		public static Guid Ссылка(this СтатусыПроверкиЭЦП Значение)
		{
			switch (Значение)
			{
				case СтатусыПроверкиЭЦП.Валидна: return Валидна;
				case СтатусыПроверкиЭЦП.НеВалидна: return НеВалидна;
			}
			return Guid.Empty;
		}
	}
}