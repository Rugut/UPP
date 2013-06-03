
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
						Insert Into _Document608(
						_IDRRef
						/*,_Version*/
						,_Marked
						,_IsMetadata
						,_Fld18216RRef
						,_Fld18217RRef
						,_Fld18220RRef
						,_Fld18221RRef
						,_Fld18222
						,_Fld18223
						,_Fld18224
						,_Fld18225
						,_Fld18226
						,_Fld18227
						,_Fld18228
						,_Fld18229
						,_Fld18230RRef
						,_Fld18231)
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
						Update _Document608
						Set
						/*_IDRRef	= @Ссылка*/
						/*,_Version	= @Версия*/
						_Marked	= @ПометкаУдаления
						,_Fld18216RRef	= @ЦиклОбмена
						,_Fld18217RRef	= @Тип
						,_Fld18220RRef	= @УчетнаяЗапись
						,_Fld18221RRef	= @Статус
						,_Fld18222	= @Тема
						,_Fld18223	= @ТекстПисьма
						,_Fld18224	= @ИдентификаторСообщения
						,_Fld18225	= @ДатаТранспорта
						,_Fld18226	= @Важность
						,_Fld18227	= @Кодировка
						,_Fld18228	= @ОтКогоАдрес
						,_Fld18229	= @ОтКогоПредставление
						,_Fld18230RRef	= @Основание
						,_Fld18231	= @ПротоколСОшибкой
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
					Команда.CommandText = @"Delete _Document608
					Where _IDRRef=@Ссылка";
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					Команда.ExecuteNonQuery();
				}
			}
		}
	}
}