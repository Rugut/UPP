
using System;
using System.Data.SqlClient;
using System.Globalization;
using System.Runtime.Serialization;
using ProtoBuf;/*https://github.com/ServiceStack/ServiceStack/tree/master/lib*/
using ServiceStack.Text;/*https://github.com/ServiceStack/ServiceStack.Text*/
using V82;
using V82.ОбщиеОбъекты;
using V82.ДокументыСсылка;
using V82.ДокументыОбъект;
using V82.ДокументыСсылка;
using V82.Перечисления;//Ссылка;
namespace V82.ДокументыОбъект
{
	[ProtoContract]
	[DataContract]
	public partial class ЭлектронноеПисьмо:ДокументОбъект
	{
		public bool _ЭтоНовый;
		public bool ЭтоНовый()
		{
			return _ЭтоНовый;
		}
		[DataMember]
		[ProtoMember(1)]
		public Guid Ссылка {get;set;}
		[DataMember]
		[ProtoMember(2)]
		public long Версия {get;set;}
		[DataMember]
		[ProtoMember(3)]
		public string ВерсияДанных {get;set;}
		/*static хэш сумма состава и порядка реквизитов*/
		/*версия класса восстановленного из пакета*/
		[DataMember]
		[ProtoMember(4)]
		public bool ПометкаУдаления {get;set;}
		[DataMember]
		[ProtoMember(5)]
		public DateTime Дата {get;set;}
		[DataMember]
		[ProtoMember(6)]
		public DateTime ПрефиксНомера {get;set;}
		[DataMember]
		[ProtoMember(7)]
		public string/*11*/ Номер {get;set;}
		[DataMember]
		[ProtoMember(8)]
		public bool Проведен {get;set;}
		[DataMember]
		[ProtoMember(9)]
		public V82.Перечисления/*Ссылка*/.ВидыТекстовЭлектронныхПисем ВидТекстаПисьма {get;set;}//Вид текста письма
		[DataMember]
		[ProtoMember(10)]
		public V82.СправочникиСсылка.ГруппыПисемЭлектроннойПочты ГруппаУчетнойЗаписи {get;set;}//Группа учетной записи
		[DataMember]
		[ProtoMember(11)]
		public DateTime ДатаОтправления {get;set;}//Дата отправления
		[DataMember]
		[ProtoMember(12)]
		public DateTime ДатаТранспорта {get;set;}//Дата отправления/получения
		[DataMember]
		[ProtoMember(13)]
		public V82.СправочникиСсылка.ЗаявкиКандидатов ЗаявкаКандидата {get;set;}//Кандидат
		[DataMember]
		[ProtoMember(14)]
		public bool ЕстьВложения {get;set;}//Есть вложения
		[DataMember]
		[ProtoMember(15)]
		public string/*(0)*/ ЗаголовокПисьма {get;set;}//Заголовок письма
		[DataMember]
		[ProtoMember(16)]
		public string/*(150)*/ ИдентификаторПисьма {get;set;}//Идентификатор письма
		[DataMember]
		[ProtoMember(17)]
		public string/*(400)*/ ИмяКомпьютераРедактированияХТМЛТекста {get;set;}//Имя компьютера редактирования ХТМЛТекста
		[DataMember]
		[ProtoMember(18)]
		public string/*(400)*/ ИмяФайлаРедактированияХТМЛТекста {get;set;}//Имя файла редактирования ХТМЛТекста
		[DataMember]
		[ProtoMember(19)]
		public string/*(200)*/ КодировкаПисьма {get;set;}//Кодировка письма
		[DataMember]
		[ProtoMember(20)]
		public string/*(0)*/ Комментарий {get;set;}
		[DataMember]
		[ProtoMember(21)]
		public string/*(0)*/ Кому {get;set;}//Кому (имя <e-mail>)
		[DataMember]
		[ProtoMember(22)]
		public string/*(0)*/ КомуПредставление {get;set;}//Кому (имя)
		[DataMember]
		[ProtoMember(23)]
		public string/*(0)*/ Копии {get;set;}//Копии (имя <e-mail>)
		[DataMember]
		[ProtoMember(24)]
		public string/*(0)*/ КопииПредставление {get;set;}//Копии (имя)
		[DataMember]
		[ProtoMember(25)]
		public bool НеРассмотрено {get;set;}//Не рассмотрено
		[DataMember]
		[ProtoMember(26)]
		public object ОснованиеПисьма {get;set;}//Основание письма
		[DataMember]
		[ProtoMember(27)]
		public bool Ответ {get;set;}
		[DataMember]
		[ProtoMember(28)]
		public V82.СправочникиСсылка.Пользователи Ответственный {get;set;}
		[DataMember]
		[ProtoMember(29)]
		public string/*(150)*/ ОтправительАдресЭлектроннойПочты {get;set;}//От кого (e-mail)
		[DataMember]
		[ProtoMember(30)]
		public string/*(150)*/ ОтправительИмя {get;set;}//От кого (имя)
		[DataMember]
		[ProtoMember(31)]
		public string/*(150)*/ ОтправительПредставление {get;set;}//От кого (имя <e-mail>)
		[DataMember]
		[ProtoMember(32)]
		public V82.СправочникиСсылка.ОформленияСтрокПисем Оформление {get;set;}
		[DataMember]
		[ProtoMember(33)]
		public bool Переадресация {get;set;}
		[DataMember]
		[ProtoMember(34)]
		public ХранилищеЗначения ПочтовоеСообщение {get;set;}//Почтовое сообщение
		[DataMember]
		[ProtoMember(35)]
		public string/*(50)*/ ПредметКонтакта {get;set;}//Предмет
		[DataMember]
		[ProtoMember(36)]
		public DateTime РассмотретьПосле {get;set;}//Рассмотреть после
		[DataMember]
		[ProtoMember(37)]
		public string/*(0)*/ СкрытыеКопии {get;set;}//Скрытые копии (имя <e-mail>)
		[DataMember]
		[ProtoMember(38)]
		public object ОтправительОбъект {get;set;}//Отправитель объект
		[DataMember]
		[ProtoMember(39)]
		public V82.Перечисления/*Ссылка*/.СостоянияПотомковЭлектронныхПисем СостояниеПотомкаПисьма {get;set;}//Состояние потомка письма
		[DataMember]
		[ProtoMember(40)]
		public V82.Перечисления/*Ссылка*/.СтатусыПисем СтатусПисьма {get;set;}//Статус письма
		[DataMember]
		[ProtoMember(41)]
		public string/*(0)*/ ТекстПисьма {get;set;}//Текст письма
		[DataMember]
		[ProtoMember(42)]
		public string/*(400)*/ Тема {get;set;}
		[DataMember]
		[ProtoMember(43)]
		public V82.СправочникиСсылка.УчетныеЗаписиЭлектроннойПочты УчетнаяЗапись {get;set;}//Учетная запись
		public void Записать()
		{
			//Установка блокировки элемента на горизантально масштабированный кластер.
			//Опционально введение тайм аута на запись одного и того же объекта, не чаще раза в 5-секунд. Защита от спама. упращение алгоритма блокировки.
			//Выделение сервиса для блокировки элемента и генерации кода
			//Выполнение операций контроля без обращений к sql-серверу.
			//Контроль конфликта блокировок.
			//Контроль загрузки булкинсертом гетерогенной коллекции.
			//Контроль уникальности кода для Документов.
			//Контроль уникальности номера для документов, в границах префикса.
			//Контроль владельца, он не может быть группой.
			//Контроль владельца он должен быть задан.
			//Контроль родителя он должен быть группой.
			//Контроль количества уровней, должен соотвествовать метаданным.
			//Контроль версии, объект не должен был быть записан перед чтением текущей записи, алгоритм версионника.
			//Контроль уникальности ссылки
			//Контроль зацикливания
			//Опционально контроль битых ссылок.
			//Соблюдейние транзакционности. ПередЗаписью. Открытие транзации. Валидации. ПриЗаписи. Фиксация транзакции. Информирование о записи элемента.
			using (var Подключение = new SqlConnection(СтрокаСоединения))
			{
				Подключение.Open();
				using (var Команда = Подключение.CreateCommand())
				{
					if(_ЭтоНовый)
					{
						Команда.CommandText = @"
						Insert Into _Document644(
						_IDRRef
						/*,_Version*/
						,_Marked
						,_IsMetadata
						,_Number
						,_Fld19237RRef
						,_Fld19238RRef
						,_Fld19239
						,_Fld19240
						,_Fld19241RRef
						,_Fld19242
						,_Fld19243
						,_Fld19244
						,_Fld19245
						,_Fld19246
						,_Fld19247
						,_Fld19248
						,_Fld19249
						,_Fld19250
						,_Fld19251
						,_Fld19252
						,_Fld19253
						,_Fld19255
						,_Fld19256RRef
						,_Fld19257
						,_Fld19258
						,_Fld19259
						,_Fld19260RRef
						,_Fld19261
						,_Fld19262
						,_Fld19263
						,_Fld19264
						,_Fld19265
						,_Fld19267RRef
						,_Fld19268RRef
						,_Fld19269
						,_Fld19270
						,_Fld19271RRef)
						Values(
						@Ссылка
						/*,@Версия*/
						,@ПометкаУдаления
						,@Номер
						,@ВидТекстаПисьма
						,@ГруппаУчетнойЗаписи
						,@ДатаОтправления
						,@ДатаТранспорта
						,@ЗаявкаКандидата
						,@ЕстьВложения
						,@ЗаголовокПисьма
						,@ИдентификаторПисьма
						,@ИмяКомпьютераРедактированияХТМЛТекста
						,@ИмяФайлаРедактированияХТМЛТекста
						,@КодировкаПисьма
						,@Комментарий
						,@Кому
						,@КомуПредставление
						,@Копии
						,@КопииПредставление
						,@НеРассмотрено
						,@Ответ
						,@Ответственный
						,@ОтправительАдресЭлектроннойПочты
						,@ОтправительИмя
						,@ОтправительПредставление
						,@Оформление
						,@Переадресация
						,@ПочтовоеСообщение
						,@ПредметКонтакта
						,@РассмотретьПосле
						,@СкрытыеКопии
						,@СостояниеПотомкаПисьма
						,@СтатусПисьма
						,@ТекстПисьма
						,@Тема
						,@УчетнаяЗапись)";
					}
					else
					{
						Команда.CommandText = @"
						Update _Document644
						Set
						/*_IDRRef	= @Ссылка*/
						/*,_Version	= @Версия*/
						_Marked	= @ПометкаУдаления
						,_Number	= @Номер
						,_Fld19237RRef	= @ВидТекстаПисьма
						,_Fld19238RRef	= @ГруппаУчетнойЗаписи
						,_Fld19239	= @ДатаОтправления
						,_Fld19240	= @ДатаТранспорта
						,_Fld19241RRef	= @ЗаявкаКандидата
						,_Fld19242	= @ЕстьВложения
						,_Fld19243	= @ЗаголовокПисьма
						,_Fld19244	= @ИдентификаторПисьма
						,_Fld19245	= @ИмяКомпьютераРедактированияХТМЛТекста
						,_Fld19246	= @ИмяФайлаРедактированияХТМЛТекста
						,_Fld19247	= @КодировкаПисьма
						,_Fld19248	= @Комментарий
						,_Fld19249	= @Кому
						,_Fld19250	= @КомуПредставление
						,_Fld19251	= @Копии
						,_Fld19252	= @КопииПредставление
						,_Fld19253	= @НеРассмотрено
						,_Fld19255	= @Ответ
						,_Fld19256RRef	= @Ответственный
						,_Fld19257	= @ОтправительАдресЭлектроннойПочты
						,_Fld19258	= @ОтправительИмя
						,_Fld19259	= @ОтправительПредставление
						,_Fld19260RRef	= @Оформление
						,_Fld19261	= @Переадресация
						,_Fld19262	= @ПочтовоеСообщение
						,_Fld19263	= @ПредметКонтакта
						,_Fld19264	= @РассмотретьПосле
						,_Fld19265	= @СкрытыеКопии
						,_Fld19267RRef	= @СостояниеПотомкаПисьма
						,_Fld19268RRef	= @СтатусПисьма
						,_Fld19269	= @ТекстПисьма
						,_Fld19270	= @Тема
						,_Fld19271RRef	= @УчетнаяЗапись
						Where _IDRRef = @Ссылка";
					}
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					/*Команда.Parameters.AddWithValue("Версия", Версия);*/
					Команда.Parameters.AddWithValue("ПометкаУдаления", ПометкаУдаления);
					Команда.Parameters.AddWithValue("Номер", Номер);
					Команда.Parameters.AddWithValue("ВидТекстаПисьма", ВидТекстаПисьма.Ключ());
					Команда.Parameters.AddWithValue("ДатаОтправления", ДатаОтправления);
					Команда.Parameters.AddWithValue("ДатаТранспорта", ДатаТранспорта);
					Команда.Parameters.AddWithValue("ЕстьВложения", ЕстьВложения);
					Команда.Parameters.AddWithValue("ЗаголовокПисьма", ЗаголовокПисьма);
					Команда.Parameters.AddWithValue("ИдентификаторПисьма", ИдентификаторПисьма);
					Команда.Parameters.AddWithValue("ИмяКомпьютераРедактированияХТМЛТекста", ИмяКомпьютераРедактированияХТМЛТекста);
					Команда.Parameters.AddWithValue("ИмяФайлаРедактированияХТМЛТекста", ИмяФайлаРедактированияХТМЛТекста);
					Команда.Parameters.AddWithValue("КодировкаПисьма", КодировкаПисьма);
					Команда.Parameters.AddWithValue("Комментарий", Комментарий);
					Команда.Parameters.AddWithValue("Кому", Кому);
					Команда.Parameters.AddWithValue("КомуПредставление", КомуПредставление);
					Команда.Parameters.AddWithValue("Копии", Копии);
					Команда.Parameters.AddWithValue("КопииПредставление", КопииПредставление);
					Команда.Parameters.AddWithValue("НеРассмотрено", НеРассмотрено);
					Команда.Parameters.AddWithValue("Ответ", Ответ);
					Команда.Parameters.AddWithValue("ОтправительАдресЭлектроннойПочты", ОтправительАдресЭлектроннойПочты);
					Команда.Parameters.AddWithValue("ОтправительИмя", ОтправительИмя);
					Команда.Parameters.AddWithValue("ОтправительПредставление", ОтправительПредставление);
					Команда.Parameters.AddWithValue("Переадресация", Переадресация);
					Команда.Parameters.AddWithValue("ПочтовоеСообщение",new byte[0]);
					Команда.Parameters.AddWithValue("ПредметКонтакта", ПредметКонтакта);
					Команда.Parameters.AddWithValue("РассмотретьПосле", РассмотретьПосле);
					Команда.Parameters.AddWithValue("СкрытыеКопии", СкрытыеКопии);
					Команда.Parameters.AddWithValue("СостояниеПотомкаПисьма", СостояниеПотомкаПисьма.Ключ());
					Команда.Parameters.AddWithValue("СтатусПисьма", СтатусПисьма.Ключ());
					Команда.Parameters.AddWithValue("ТекстПисьма", ТекстПисьма);
					Команда.Parameters.AddWithValue("Тема", Тема);
					Команда.ExecuteNonQuery();
				}
			}
		}
		public void Удалить()
		{
			using (var Подключение = new SqlConnection(СтрокаСоединения))
			{
				Подключение.Open();
				using (var Команда = Подключение.CreateCommand())
				{
					Команда.CommandText = @"Delete _Document644
					Where _IDRRef=@Ссылка";
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					Команда.ExecuteNonQuery();
				}
			}
		}
	}
}