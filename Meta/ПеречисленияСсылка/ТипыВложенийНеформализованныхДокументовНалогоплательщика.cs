
using System;
using System.Runtime.Serialization;
using V82;
using V82.Перечисления;//Ссылка;
namespace V82.Перечисления//Ссылка
{
	[DataContract]
	public enum ТипыВложенийНеформализованныхДокументовНалогоплательщика
	{
		[NonSerialized]
		ПустаяСсылка = - 1,
		[EnumMember(Value = "{\"Ссылка\":\"85a1a133-3609-4d09-89c0-5e8daba7ce89\", \"Представление\":\"ТекстовыйДокумент\"}")]
		ТекстовыйДокумент = 0,//Текстовый документ
		[EnumMember(Value = "{\"Ссылка\":\"357fa84d-024a-4add-8c1f-2b7d0fce9c64\", \"Представление\":\"ДокументMicrosoftWord\"}")]
		ДокументMicrosoftWord = 1,//Документ Microsoft Word
		[EnumMember(Value = "{\"Ссылка\":\"af394c61-5a9b-4226-b325-d5ae22143bf0\", \"Представление\":\"ДокументMicrosoftExcel\"}")]
		ДокументMicrosoftExcel = 2,//Документ Microsoft Excel
	}
	public static partial class ТипыВложенийНеформализованныхДокументовНалогоплательщика_Значения//:ПеречислениеСсылка
	{
		public static readonly Guid ТекстовыйДокумент = new Guid("8d5ec089-a7ab-89ce-4d09-360985a1a133");//Текстовый документ
		public static readonly Guid ДокументMicrosoftWord = new Guid("7d2b1f8c-ce0f-649c-4add-024a357fa84d");//Документ Microsoft Word
		public static readonly Guid ДокументMicrosoftExcel = new Guid("aed525b3-1422-f03b-4226-5a9baf394c61");//Документ Microsoft Excel
		public static ТипыВложенийНеформализованныхДокументовНалогоплательщика Получить(this ТипыВложенийНеформализованныхДокументовНалогоплательщика Значение, byte[] Ссылка)
		{
			return Получить(Значение, new Guid(Ссылка));
		}
		public static ТипыВложенийНеформализованныхДокументовНалогоплательщика Получить(this ТипыВложенийНеформализованныхДокументовНалогоплательщика Значение, Guid Ссылка)
		{
			if(Ссылка == ТекстовыйДокумент)
			{
				return ТипыВложенийНеформализованныхДокументовНалогоплательщика.ТекстовыйДокумент;
			}
			else if(Ссылка == ДокументMicrosoftWord)
			{
				return ТипыВложенийНеформализованныхДокументовНалогоплательщика.ДокументMicrosoftWord;
			}
			else if(Ссылка == ДокументMicrosoftExcel)
			{
				return ТипыВложенийНеформализованныхДокументовНалогоплательщика.ДокументMicrosoftExcel;
			}
			return ТипыВложенийНеформализованныхДокументовНалогоплательщика.ПустаяСсылка;
		}
		public static byte[] Ключ(this ТипыВложенийНеформализованныхДокументовНалогоплательщика Значение)
		{
			return Ссылка(Значение).ToByteArray();
		}
		public static Guid Ссылка(this ТипыВложенийНеформализованныхДокументовНалогоплательщика Значение)
		{
			switch (Значение)
			{
				case ТипыВложенийНеформализованныхДокументовНалогоплательщика.ТекстовыйДокумент: return ТекстовыйДокумент;
				case ТипыВложенийНеформализованныхДокументовНалогоплательщика.ДокументMicrosoftWord: return ДокументMicrosoftWord;
				case ТипыВложенийНеформализованныхДокументовНалогоплательщика.ДокументMicrosoftExcel: return ДокументMicrosoftExcel;
			}
			return Guid.Empty;
		}
	}
}