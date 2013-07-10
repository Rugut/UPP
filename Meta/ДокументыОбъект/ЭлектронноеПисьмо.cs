
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
						Insert Into _Document497(
						_IDRRef
						/*,_Version*/
						,_Marked
						,_IsMetadata
						,_Number
						,_Fld12718RRef
						,_Fld12719RRef
						,_Fld12720
						,_Fld12721
						,_Fld22325RRef
						,_Fld12722
						,_Fld12749
						,_Fld12723
						,_Fld12724
						,_Fld12725
						,_Fld12750
						,_Fld12726
						,_Fld12727
						,_Fld12728
						,_Fld12729
						,_Fld12730
						,_Fld12731
						,_Fld12733
						,_Fld12734RRef
						,_Fld12735
						,_Fld12736
						,_Fld12737
						,_Fld12751RRef
						,_Fld12738
						,_Fld12739
						,_Fld12752
						,_Fld12740
						,_Fld12741
						,_Fld12742RRef
						,_Fld12743RRef
						,_Fld12744
						,_Fld12745
						,_Fld12746RRef)
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
						Update _Document497
						Set
						/*_IDRRef	= @Ссылка*/
						/*,_Version	= @Версия*/
						_Marked	= @ПометкаУдаления
						,_Number	= @Номер
						,_Fld12718RRef	= @ВидТекстаПисьма
						,_Fld12719RRef	= @ГруппаУчетнойЗаписи
						,_Fld12720	= @ДатаОтправления
						,_Fld12721	= @ДатаТранспорта
						,_Fld22325RRef	= @ЗаявкаКандидата
						,_Fld12722	= @ЕстьВложения
						,_Fld12749	= @ЗаголовокПисьма
						,_Fld12723	= @ИдентификаторПисьма
						,_Fld12724	= @ИмяКомпьютераРедактированияХТМЛТекста
						,_Fld12725	= @ИмяФайлаРедактированияХТМЛТекста
						,_Fld12750	= @КодировкаПисьма
						,_Fld12726	= @Комментарий
						,_Fld12727	= @Кому
						,_Fld12728	= @КомуПредставление
						,_Fld12729	= @Копии
						,_Fld12730	= @КопииПредставление
						,_Fld12731	= @НеРассмотрено
						,_Fld12733	= @Ответ
						,_Fld12734RRef	= @Ответственный
						,_Fld12735	= @ОтправительАдресЭлектроннойПочты
						,_Fld12736	= @ОтправительИмя
						,_Fld12737	= @ОтправительПредставление
						,_Fld12751RRef	= @Оформление
						,_Fld12738	= @Переадресация
						,_Fld12739	= @ПочтовоеСообщение
						,_Fld12752	= @ПредметКонтакта
						,_Fld12740	= @РассмотретьПосле
						,_Fld12741	= @СкрытыеКопии
						,_Fld12742RRef	= @СостояниеПотомкаПисьма
						,_Fld12743RRef	= @СтатусПисьма
						,_Fld12744	= @ТекстПисьма
						,_Fld12745	= @Тема
						,_Fld12746RRef	= @УчетнаяЗапись
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
					Команда.CommandText = @"Delete _Document497
					Where _IDRRef=@Ссылка";
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					Команда.ExecuteNonQuery();
				}
			}
		}
	}
}