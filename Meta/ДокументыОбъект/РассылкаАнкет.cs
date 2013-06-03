
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
	///<summary>
	///(Общ)
	///</summary>
	[ProtoContract]
	[DataContract]
	public partial class РассылкаАнкет:ДокументОбъект
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
		public V82.СправочникиСсылка.ТиповыеАнкеты Анкета {get;set;}
		[DataMember]
		[ProtoMember(10)]
		public object ЭлектронныйАдресОтветов {get;set;}//Электронный адрес ответов
		[DataMember]
		[ProtoMember(11)]
		public bool СУведомлениемОПолучении {get;set;}//С уведомлением о получении
		[DataMember]
		[ProtoMember(12)]
		public object УчетнаяЗаписьДляОтправки {get;set;}//Учетная запись для отправки
		[DataMember]
		[ProtoMember(13)]
		public V82.СправочникиСсылка.УчетныеЗаписиЭлектроннойПочты ЭлектронныйАдресОтветовВстроенныйПочтовыйКлиент {get;set;}//Электронный адрес ответов встроенный почтовый клиент
		[DataMember]
		[ProtoMember(14)]
		public V82.ДокументыСсылка.РассылкаАнкет ПервичнаяРассылка {get;set;}//Первичная рассылка
		[DataMember]
		[ProtoMember(15)]
		public string/*(0)*/ ТекстПисьма {get;set;}//Текст письма
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(16)]
		public V82.СправочникиСсылка.Пользователи Ответственный {get;set;}
		///<summary>
		///(Общ) Любая дополнительная информация
		///</summary>
		[DataMember]
		[ProtoMember(17)]
		public string/*(0)*/ Комментарий {get;set;}
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
						Insert Into _Document549(
						_IDRRef
						/*,_Version*/
						,_Marked
						,_IsMetadata
						,_Number
						,_Fld15230RRef
						,_Fld15232
						,_Fld15234RRef
						,_Fld15235RRef
						,_Fld15236
						,_Fld15237RRef
						,_Fld15238)
						Values(
						@Ссылка
						/*,@Версия*/
						,@ПометкаУдаления
						,@Номер
						,@Анкета
						,@СУведомлениемОПолучении
						,@ЭлектронныйАдресОтветовВстроенныйПочтовыйКлиент
						,@ПервичнаяРассылка
						,@ТекстПисьма
						,@Ответственный
						,@Комментарий)";
					}
					else
					{
						Команда.CommandText = @"
						Update _Document549
						Set
						/*_IDRRef	= @Ссылка*/
						/*,_Version	= @Версия*/
						_Marked	= @ПометкаУдаления
						,_Number	= @Номер
						,_Fld15230RRef	= @Анкета
						,_Fld15232	= @СУведомлениемОПолучении
						,_Fld15234RRef	= @ЭлектронныйАдресОтветовВстроенныйПочтовыйКлиент
						,_Fld15235RRef	= @ПервичнаяРассылка
						,_Fld15236	= @ТекстПисьма
						,_Fld15237RRef	= @Ответственный
						,_Fld15238	= @Комментарий
						Where _IDRRef = @Ссылка";
					}
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					/*Команда.Parameters.AddWithValue("Версия", Версия);*/
					Команда.Parameters.AddWithValue("ПометкаУдаления", ПометкаУдаления);
					Команда.Parameters.AddWithValue("Номер", Номер);
					Команда.Parameters.AddWithValue("СУведомлениемОПолучении", СУведомлениемОПолучении);
					Команда.Parameters.AddWithValue("ПервичнаяРассылка", ПервичнаяРассылка.Ссылка);
					Команда.Parameters.AddWithValue("ТекстПисьма", ТекстПисьма);
					Команда.Parameters.AddWithValue("Комментарий", Комментарий);
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
					Команда.CommandText = @"Delete _Document549
					Where _IDRRef=@Ссылка";
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					Команда.ExecuteNonQuery();
				}
			}
		}
	}
}