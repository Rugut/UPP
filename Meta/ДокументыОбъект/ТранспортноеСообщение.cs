
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
	public partial class ТранспортноеСообщение:ДокументОбъект
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
		public bool Проведен {get;set;}
		[DataMember]
		[ProtoMember(8)]
		public V82.СправочникиСсылка.ЦиклыОбмена ЦиклОбмена {get;set;}//Цикл обмена
		[DataMember]
		[ProtoMember(9)]
		public V82.Перечисления/*Ссылка*/.ТипыТранспортныхСообщений Тип {get;set;}
		[DataMember]
		[ProtoMember(10)]
		public object Отправитель {get;set;}
		[DataMember]
		[ProtoMember(11)]
		public object Получатель {get;set;}
		[DataMember]
		[ProtoMember(12)]
		public V82.СправочникиСсылка.УчетныеЗаписиДокументооборота УчетнаяЗапись {get;set;}//Учетная запись
		[DataMember]
		[ProtoMember(13)]
		public V82.Перечисления/*Ссылка*/.СтатусыПисем Статус {get;set;}
		[DataMember]
		[ProtoMember(14)]
		public string/*(0)*/ Тема {get;set;}
		[DataMember]
		[ProtoMember(15)]
		public string/*(0)*/ ТекстПисьма {get;set;}//Текст письма
		[DataMember]
		[ProtoMember(16)]
		public string/*(255)*/ ИдентификаторСообщения {get;set;}//Идентификатор сообщения
		[DataMember]
		[ProtoMember(17)]
		public DateTime ДатаТранспорта {get;set;}//Дата транспорта
		[DataMember]
		[ProtoMember(18)]
		public decimal/*(1)*/ Важность {get;set;}
		[DataMember]
		[ProtoMember(19)]
		public string/*(100)*/ Кодировка {get;set;}
		[DataMember]
		[ProtoMember(20)]
		public string/*(255)*/ ОтКогоАдрес {get;set;}//От кого (адрес)
		[DataMember]
		[ProtoMember(21)]
		public string/*(255)*/ ОтКогоПредставление {get;set;}//От кого (представление)
		[DataMember]
		[ProtoMember(22)]
		public V82.ДокументыСсылка.ТранспортноеСообщение Основание {get;set;}
		[DataMember]
		[ProtoMember(23)]
		public bool ПротоколСОшибкой {get;set;}//Протокол с ошибкой
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
						Insert Into _Document23176(
						_IDRRef
						/*,_Version*/
						,_Marked
						,_IsMetadata
						,_Fld25582RRef
						,_Fld25583RRef
						,_Fld25586RRef
						,_Fld25587RRef
						,_Fld25588
						,_Fld25589
						,_Fld25590
						,_Fld25591
						,_Fld25592
						,_Fld25593
						,_Fld25594
						,_Fld25595
						,_Fld25596RRef
						,_Fld25597)
						Values(
						@Ссылка
						/*,@Версия*/
						,@ПометкаУдаления
						,@ЦиклОбмена
						,@Тип
						,@УчетнаяЗапись
						,@Статус
						,@Тема
						,@ТекстПисьма
						,@ИдентификаторСообщения
						,@ДатаТранспорта
						,@Важность
						,@Кодировка
						,@ОтКогоАдрес
						,@ОтКогоПредставление
						,@Основание
						,@ПротоколСОшибкой)";
					}
					else
					{
						Команда.CommandText = @"
						Update _Document23176
						Set
						/*_IDRRef	= @Ссылка*/
						/*,_Version	= @Версия*/
						_Marked	= @ПометкаУдаления
						,_Fld25582RRef	= @ЦиклОбмена
						,_Fld25583RRef	= @Тип
						,_Fld25586RRef	= @УчетнаяЗапись
						,_Fld25587RRef	= @Статус
						,_Fld25588	= @Тема
						,_Fld25589	= @ТекстПисьма
						,_Fld25590	= @ИдентификаторСообщения
						,_Fld25591	= @ДатаТранспорта
						,_Fld25592	= @Важность
						,_Fld25593	= @Кодировка
						,_Fld25594	= @ОтКогоАдрес
						,_Fld25595	= @ОтКогоПредставление
						,_Fld25596RRef	= @Основание
						,_Fld25597	= @ПротоколСОшибкой
						Where _IDRRef = @Ссылка";
					}
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					/*Команда.Parameters.AddWithValue("Версия", Версия);*/
					Команда.Parameters.AddWithValue("ПометкаУдаления", ПометкаУдаления);
					Команда.Parameters.AddWithValue("Тип", Тип.Ключ());
					Команда.Parameters.AddWithValue("Статус", Статус.Ключ());
					Команда.Parameters.AddWithValue("Тема", Тема);
					Команда.Parameters.AddWithValue("ТекстПисьма", ТекстПисьма);
					Команда.Parameters.AddWithValue("ИдентификаторСообщения", ИдентификаторСообщения);
					Команда.Parameters.AddWithValue("ДатаТранспорта", ДатаТранспорта);
					Команда.Parameters.AddWithValue("Важность", Важность);
					Команда.Parameters.AddWithValue("Кодировка", Кодировка);
					Команда.Parameters.AddWithValue("ОтКогоАдрес", ОтКогоАдрес);
					Команда.Parameters.AddWithValue("ОтКогоПредставление", ОтКогоПредставление);
					Команда.Parameters.AddWithValue("Основание", Основание.Ссылка);
					Команда.Parameters.AddWithValue("ПротоколСОшибкой", ПротоколСОшибкой);
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
					Команда.CommandText = @"Delete _Document23176
					Where _IDRRef=@Ссылка";
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					Команда.ExecuteNonQuery();
				}
			}
		}
	}
}