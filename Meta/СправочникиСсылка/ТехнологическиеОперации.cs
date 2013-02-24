
using System;
using System.IO;
using System.Globalization;
using System.Runtime.Serialization;
using ProtoBuf;/*https://github.com/ServiceStack/ServiceStack/tree/master/lib*/
using ServiceStack.Text;/*https://github.com/ServiceStack/ServiceStack.Text*/
using V82;
using V82.ОбщиеОбъекты;
using V82.СправочникиСсылка;
using V82.ДокументыСсылка;
using V82.Перечисления;//Ссылка;
namespace V82.СправочникиСсылка
{
	///<summary>
	///(Общ) 
	///</summary>
	[ProtoContract]
	[DataContract]
	public partial class ТехнологическиеОперации:СправочникСсылка,IСериализаторProtoBuf,IСериализаторJson
	{
		public static readonly Guid ГуидКласса = new Guid("f721125f-5060-428d-adfc-f262e631392e");
		public static readonly DateTime ВерсияКласса = DateTime.ParseExact("20121221191148.000", new string[] {"yyyyMMddHHmmss.fff"}, CultureInfo.InvariantCulture, DateTimeStyles.None);
		public static readonly long КонтрольнаяСуммаКласса = 123;
		[DataMember]
		[ProtoMember(1)]
		public Guid Ссылка {get;set;}
		[DataMember]
		[ProtoMember(2)]
		public long Версия {get;set;}
		public string ВерсияДанных {get;set;}
		/*static хэш сумма состава и порядка реквизитов*/
		/*версия класса восстановленного из пакета*/
		public bool ПометкаУдаления {get;set;}
		public bool Предопределенный {get;set;}
		public Guid Родитель {get;set;}
		public bool ЭтоГруппа {get;set;}
		public string/*9*/ Код {get;set;}
		public string/*100*/ Наименование {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		public V82.СправочникиСсылка.СтатьиЗатрат ОсновнаяСтатьяЗатратНаПроизводство {get;set;}//Основная статья затрат на производство
		///<summary>
		///(Регл)
		///</summary>
		public V82.СправочникиСсылка.СпособыОтраженияЗарплатыВРеглУчете СпособОтраженияЗарплатыВБухучете {get;set;}//Способ отражения зарплаты в бухучете
		///<summary>
		///(Общ)
		///</summary>
		public V82.СправочникиСсылка.СпособыРаспределенияЗатратНаВыпуск ОсновнойСпособРаспределенияЗатратНаВыпуск {get;set;}//Основной способ распределения затрат на выпуск
		///<summary>
		///(Упр)
		///</summary>
		public V82.СправочникиСсылка.НоменклатурныеГруппы ОсновнаяНоменклатурнаяГруппа {get;set;}//Основная номенклатурная группа
		///<summary>
		///(Общ)
		///</summary>
		public decimal/*(15.3)*/ Расценка {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		public V82.СправочникиСсылка.КлассификаторЕдиницИзмерения БазоваяЕдиницаИзмерения {get;set;}//Базовая единица измерения
		///<summary>
		///(Общ)
		///</summary>
		public V82.СправочникиСсылка.Валюты Валюта {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		public decimal/*(10)*/ НормаВремени {get;set;}//Норма времени
		///<summary>
		///(Общ)
		///</summary>
		public decimal/*(10.3)*/ Коэффициент {get;set;}

		public V82.СправочникиОбъект.ТехнологическиеОперации  ПолучитьОбъект()
		{
			var Объект = new V82.СправочникиОбъект.ТехнологическиеОперации();
			Объект._ЭтоНовый = false;
			Объект.Ссылка = Ссылка;
			Объект.Версия = Версия;
			Объект.ПометкаУдаления = ПометкаУдаления;
			Объект.Предопределенный = Предопределенный;
			Объект.Родитель = Родитель;
			Объект.ЭтоГруппа = ЭтоГруппа;
			Объект.Код = Код;
			Объект.Наименование = Наименование;
			Объект.ОсновнаяСтатьяЗатратНаПроизводство = ОсновнаяСтатьяЗатратНаПроизводство;
			Объект.СпособОтраженияЗарплатыВБухучете = СпособОтраженияЗарплатыВБухучете;
			Объект.ОсновнойСпособРаспределенияЗатратНаВыпуск = ОсновнойСпособРаспределенияЗатратНаВыпуск;
			Объект.ОсновнаяНоменклатурнаяГруппа = ОсновнаяНоменклатурнаяГруппа;
			Объект.Расценка = Расценка;
			Объект.БазоваяЕдиницаИзмерения = БазоваяЕдиницаИзмерения;
			Объект.Валюта = Валюта;
			Объект.НормаВремени = НормаВремени;
			Объект.Коэффициент = Коэффициент;
			return Объект;
		}

		public void СериализацияProtoBuf(Stream Поток)
		{
			Serializer.Serialize(Поток,this);
		}

		public string СериализацияJson()
		{
			return this.ToJson();
		}

		public string СериализацияXml()
		{
			return this.ToXml();
		}
	}
}