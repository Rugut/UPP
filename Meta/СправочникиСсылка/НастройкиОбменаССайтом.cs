
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
	[ProtoContract]
	[DataContract]
	public partial class НастройкиОбменаССайтом:СправочникСсылка,IСериализаторProtoBuf,IСериализаторJson
	{
		public static readonly Guid ГуидКласса = new Guid("0c148f3d-26d7-4fdb-b823-6a8a1caf7ee7");
		public static readonly DateTime ВерсияКласса = DateTime.ParseExact("20121221191637.000", new string[] {"yyyyMMddHHmmss.fff"}, CultureInfo.InvariantCulture, DateTimeStyles.None);
		public static readonly long КонтрольнаяСуммаКласса = 123;
		[DataMember]
		[ProtoMember(1)]
		public Guid Ссылка {get;set;}
		[DataMember]
		[ProtoMember(2)]
		public long Версия {get;set;}
		/*static хэш сумма состава и порядка реквизитов*/
		/*версия класса восстановленного из пакета*/
		[DataMember]
		[ProtoMember(3)]
		public bool ПометкаУдаления {get;set;}
		[DataMember]
		[ProtoMember(4)]
		public bool Предопределенный {get;set;}
		[DataMember]
		[ProtoMember(5)]
		public string/*3*/ Код {get;set;}
		[DataMember]
		[ProtoMember(6)]
		public string/*50*/ Наименование {get;set;}
		[DataMember]
		[ProtoMember(7)]
		public bool ОбменТоварами {get;set;}//Обмен товарами
		[DataMember]
		[ProtoMember(8)]
		public bool ОбменЗаказами {get;set;}//Обмен заказами
		[DataMember]
		[ProtoMember(9)]
		public object УзелОбменаТоварами {get;set;}//Узел обмена товарами
		[DataMember]
		[ProtoMember(10)]
		public object УзелОбменаЗаказами {get;set;}//Узел обмена заказами
		[DataMember]
		[ProtoMember(11)]
		public bool ВыгружатьТолькоИзменения {get;set;}//Выгружать только изменения
		[DataMember]
		[ProtoMember(12)]
		public bool ВыгружатьНаСайт {get;set;}//Выгружать на сайт
		[DataMember]
		[ProtoMember(13)]
		public string/*(0)*/ КаталогВыгрузки {get;set;}//Каталог выгрузки
		[DataMember]
		[ProtoMember(14)]
		public string/*(255)*/ HTTPОбменАдресСайта {get;set;}//HTTP адрес раздела сайта для обмена
		[DataMember]
		[ProtoMember(15)]
		public string/*(255)*/ HTTPОбменИмяПользователя {get;set;}//HTTP обмен имя пользователя
		[DataMember]
		[ProtoMember(16)]
		public string/*(255)*/ HTTPОбменПароль {get;set;}//HTTP обмен пароль
		[DataMember]
		[ProtoMember(17)]
		public bool HTTPОбменПроксиИспользование {get;set;}//Использовать прокси-сервер
		[DataMember]
		[ProtoMember(18)]
		public string/*(255)*/ HTTPОбменПроксиСервер {get;set;}//Имя или адрес сервера
		[DataMember]
		[ProtoMember(19)]
		public decimal/*(5)*/ HTTPОбменПроксиПорт {get;set;}//Порт прокси-сервера
		[DataMember]
		[ProtoMember(20)]
		public string/*(255)*/ HTTPОбменПроксиИмяПользователя {get;set;}//Имя пользователя прокси
		[DataMember]
		[ProtoMember(21)]
		public string/*(255)*/ HTTPОбменПроксиПароль {get;set;}//Пароль пользователя прокси-сервера
		[DataMember]
		[ProtoMember(22)]
		public V82.СправочникиСсылка.Контрагенты ГруппаДляНовыхКонтрагентов {get;set;}//Группа для новых контрагентов
		[DataMember]
		[ProtoMember(23)]
		public V82.СправочникиСсылка.Номенклатура ГруппаДляНовойНоменклатуры {get;set;}//Группа для новой номенклатуры
		[DataMember]
		[ProtoMember(24)]
		public V82.СправочникиСсылка.Организации Организация {get;set;}
		[DataMember]
		[ProtoMember(25)]
		public V82.СправочникиСсылка.Пользователи Ответственный {get;set;}
		[DataMember]
		[ProtoMember(26)]
		public V82.СправочникиСсылка.Подразделения Подразделение {get;set;}
		[DataMember]
		[ProtoMember(27)]
		public bool ЗаписыватьДокументыТекущейДатой {get;set;}//Записывать документы текущей датой
		[DataMember]
		[ProtoMember(28)]
		public bool ПроводитьДокументы {get;set;}//Проводить документы
		[DataMember]
		[ProtoMember(29)]
		public bool ПроводитьДокументыОперативно {get;set;}//Проводить документы оперативно
		[DataMember]
		[ProtoMember(30)]
		public string/*(12)*/ СпособИдентификацииКонтрагентов {get;set;}//Способ идентификации контрагентов
		[DataMember]
		[ProtoMember(31)]
		public V82.СправочникиСсылка.КлассификаторЕдиницИзмерения ЕдиницаИзмеренияНовойНоменклатуры {get;set;}//Единица измерения новой номенклатуры
		[DataMember]
		[ProtoMember(32)]
		public ХранилищеЗначения СохраненныеНастройкиПостроителя {get;set;}
		[DataMember]
		[ProtoMember(33)]
		public bool ВыгружатьКартинки {get;set;}//Выгружать картинки
		[DataMember]
		[ProtoMember(34)]
		public string/*(0)*/ Комментарий {get;set;}
		[DataMember]
		[ProtoMember(35)]
		public string/*(40)*/ РегламентноеЗадание {get;set;}//Регламентное задание
		[DataMember]
		[ProtoMember(36)]
		public bool ИспользоватьРегламентныеЗадания {get;set;}//Использовать регламентные задания

		public V82.СправочникиОбъект.НастройкиОбменаССайтом  ПолучитьОбъект()
		{
			var Объект = new V82.СправочникиОбъект.НастройкиОбменаССайтом();
			Объект._ЭтоНовый = false;
			Объект.Ссылка = Ссылка;
			Объект.Версия = Версия;
			Объект.ПометкаУдаления = ПометкаУдаления;
			Объект.Предопределенный = Предопределенный;
			Объект.Код = Код;
			Объект.Наименование = Наименование;
			Объект.ОбменТоварами = ОбменТоварами;
			Объект.ОбменЗаказами = ОбменЗаказами;
			Объект.УзелОбменаТоварами = УзелОбменаТоварами;
			Объект.УзелОбменаЗаказами = УзелОбменаЗаказами;
			Объект.ВыгружатьТолькоИзменения = ВыгружатьТолькоИзменения;
			Объект.ВыгружатьНаСайт = ВыгружатьНаСайт;
			Объект.КаталогВыгрузки = КаталогВыгрузки;
			Объект.HTTPОбменАдресСайта = HTTPОбменАдресСайта;
			Объект.HTTPОбменИмяПользователя = HTTPОбменИмяПользователя;
			Объект.HTTPОбменПароль = HTTPОбменПароль;
			Объект.HTTPОбменПроксиИспользование = HTTPОбменПроксиИспользование;
			Объект.HTTPОбменПроксиСервер = HTTPОбменПроксиСервер;
			Объект.HTTPОбменПроксиПорт = HTTPОбменПроксиПорт;
			Объект.HTTPОбменПроксиИмяПользователя = HTTPОбменПроксиИмяПользователя;
			Объект.HTTPОбменПроксиПароль = HTTPОбменПроксиПароль;
			Объект.ГруппаДляНовыхКонтрагентов = ГруппаДляНовыхКонтрагентов;
			Объект.ГруппаДляНовойНоменклатуры = ГруппаДляНовойНоменклатуры;
			Объект.Организация = Организация;
			Объект.Ответственный = Ответственный;
			Объект.Подразделение = Подразделение;
			Объект.ЗаписыватьДокументыТекущейДатой = ЗаписыватьДокументыТекущейДатой;
			Объект.ПроводитьДокументы = ПроводитьДокументы;
			Объект.ПроводитьДокументыОперативно = ПроводитьДокументыОперативно;
			Объект.СпособИдентификацииКонтрагентов = СпособИдентификацииКонтрагентов;
			Объект.ЕдиницаИзмеренияНовойНоменклатуры = ЕдиницаИзмеренияНовойНоменклатуры;
			Объект.СохраненныеНастройкиПостроителя = СохраненныеНастройкиПостроителя;
			Объект.ВыгружатьКартинки = ВыгружатьКартинки;
			Объект.Комментарий = Комментарий;
			Объект.РегламентноеЗадание = РегламентноеЗадание;
			Объект.ИспользоватьРегламентныеЗадания = ИспользоватьРегламентныеЗадания;
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
