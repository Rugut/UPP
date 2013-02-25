
using System;
using System.Runtime.Serialization;
using V82;
using V82.Перечисления;//Ссылка;
namespace V82.Перечисления//Ссылка
{
	[DataContract]
	public enum ТООшибкиККМOnline
	{
		[NonSerialized]
		ПустаяСсылка = - 1,
	}
	public static partial class ТООшибкиККМOnline_Значения//:ПеречислениеСсылка
	{
		public static ТООшибкиККМOnline Получить(this ТООшибкиККМOnline Значение, byte[] Ссылка)
		{
			return Получить(Значение, new Guid(Ссылка));
		}
		public static ТООшибкиККМOnline Получить(this ТООшибкиККМOnline Значение, Guid Ссылка)
		{
			return ТООшибкиККМOnline.ПустаяСсылка;
		}
		public static byte[] Ключ(this ТООшибкиККМOnline Значение)
		{
			return Ссылка(Значение).ToByteArray();
		}
		public static Guid Ссылка(this ТООшибкиККМOnline Значение)
		{
			switch (Значение)
			{
			}
			return Guid.Empty;
		}
	}
}