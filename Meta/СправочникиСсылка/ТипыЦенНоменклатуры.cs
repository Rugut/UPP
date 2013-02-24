
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
	///(Упр)
	///</summary>
	[ProtoContract]
	[DataContract]
	public partial class ТипыЦенНоменклатуры:СправочникСсылка,IСериализаторProtoBuf,IСериализаторJson
	{
		public static readonly Guid ГуидКласса = new Guid("725b7d92-00ad-4110-9079-687c435246ee");
		public static readonly DateTime ВерсияКласса = DateTime.ParseExact("20121221191718.000", new string[] {"yyyyMMddHHmmss.fff"}, CultureInfo.InvariantCulture, DateTimeStyles.None);
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
		public string/*9*/ Код {get;set;}
		public string/*25*/ Наименование {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		public V82.СправочникиСсылка.Валюты ВалютаЦены {get;set;}//Валюта цены по умолчанию
		///<summary>
		///(Общ) Тип цен, от которого рассчитываются цены данного типа, если не выбран, то цены задаются вручную
		///</summary>
		public V82.СправочникиСсылка.ТипыЦенНоменклатуры БазовыйТипЦен {get;set;}//Базовый тип цен
		///<summary>
		///(Общ) Истина - цены автоматически рассчитываются (не хранятся) на основании цен базового типа
		///</summary>
		public bool Рассчитывается {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		public decimal/*(5.2)*/ ПроцентСкидкиНаценки {get;set;}//Процент скидки или наценки по умолчанию
		///<summary>
		///(Общ) Истина - цена включает НДС, ложь - не включает
		///</summary>
		public bool ЦенаВключаетНДС {get;set;}//Цена включает НДС
		///<summary>
		///(Общ)
		///</summary>
		public V82.Перечисления/*Ссылка*/.ПорядкиОкругления ПорядокОкругления {get;set;}//Порядок округления
		///<summary>
		///(Общ) Истина, то при порядке округления "5" 0.01 будет округлена до 5, ложь - округление по арифметическим правилам
		///</summary>
		public bool ОкруглятьВБольшуюСторону {get;set;}//Округлять в большую сторону
		///<summary>
		///(Общ) Любая дополнительная информация
		///</summary>
		public string/*(0)*/ Комментарий {get;set;}
		public V82.Перечисления/*Ссылка*/.СпособыРасчетаЦены СпособРасчетаЦены {get;set;}//Способ расчета цены

		public V82.СправочникиОбъект.ТипыЦенНоменклатуры  ПолучитьОбъект()
		{
			var Объект = new V82.СправочникиОбъект.ТипыЦенНоменклатуры();
			Объект._ЭтоНовый = false;
			Объект.Ссылка = Ссылка;
			Объект.Версия = Версия;
			Объект.ПометкаУдаления = ПометкаУдаления;
			Объект.Предопределенный = Предопределенный;
			Объект.Код = Код;
			Объект.Наименование = Наименование;
			Объект.ВалютаЦены = ВалютаЦены;
			Объект.БазовыйТипЦен = БазовыйТипЦен;
			Объект.Рассчитывается = Рассчитывается;
			Объект.ПроцентСкидкиНаценки = ПроцентСкидкиНаценки;
			Объект.ЦенаВключаетНДС = ЦенаВключаетНДС;
			Объект.ПорядокОкругления = ПорядокОкругления;
			Объект.ОкруглятьВБольшуюСторону = ОкруглятьВБольшуюСторону;
			Объект.Комментарий = Комментарий;
			Объект.СпособРасчетаЦены = СпособРасчетаЦены;
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