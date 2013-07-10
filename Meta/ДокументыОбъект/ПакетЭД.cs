
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
	public partial class ПакетЭД:ДокументОбъект
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
		public V82.Перечисления/*Ссылка*/.НаправленияЭД Направление {get;set;}
		[DataMember]
		[ProtoMember(10)]
		public string/*(80)*/ Получатель {get;set;}
		[DataMember]
		[ProtoMember(11)]
		public string/*(80)*/ Отправитель {get;set;}
		[DataMember]
		[ProtoMember(12)]
		public bool ДанныеЗашифрованы {get;set;}//Данные зашифрованы
		[DataMember]
		[ProtoMember(13)]
		public object АдресРесурсаОрганизации {get;set;}//Адрес ресурса организации
		[DataMember]
		[ProtoMember(14)]
		public string/*(200)*/ АдресРесурсаКонтрагента {get;set;}//Адрес ресурса контрагента
		[DataMember]
		[ProtoMember(15)]
		public string/*(100)*/ СертификатШифрования {get;set;}//Сертификат шифрования
		[DataMember]
		[ProtoMember(16)]
		public V82.СправочникиСсылка.СоглашенияОбИспользованииЭД Соглашение {get;set;}
		[DataMember]
		[ProtoMember(17)]
		public V82.Перечисления/*Ссылка*/.СтатусыПакетовЭД СтатусПакета {get;set;}//Статус пакета
		[DataMember]
		[ProtoMember(18)]
		public V82.СправочникиСсылка.Контрагенты Контрагент {get;set;}
		[DataMember]
		[ProtoMember(19)]
		public V82.СправочникиСсылка.Организации Организация {get;set;}
		[DataMember]
		[ProtoMember(20)]
		public V82.Перечисления/*Ссылка*/.СпособыОбменаЭД СпособОбменаЭД {get;set;}//Способ обмена
		[DataMember]
		[ProtoMember(21)]
		public string/*(0)*/ Комментарий {get;set;}
		[DataMember]
		[ProtoMember(22)]
		public string/*(80)*/ ВнешнийУИД {get;set;}//Внешний уникальный идентификатор
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
						Insert Into _Document23158(
						_IDRRef
						/*,_Version*/
						,_Marked
						,_IsMetadata
						,_Number
						,_Fld24715RRef
						,_Fld24716
						,_Fld24717
						,_Fld24718
						,_Fld24720
						,_Fld24721
						,_Fld24722RRef
						,_Fld24723RRef
						,_Fld24724RRef
						,_Fld24725RRef
						,_Fld24726RRef
						,_Fld24727
						,_Fld24728)
						Values(
						@Ссылка
						/*,@Версия*/
						,@ПометкаУдаления
						,@Номер
						,@Направление
						,@Получатель
						,@Отправитель
						,@ДанныеЗашифрованы
						,@АдресРесурсаКонтрагента
						,@СертификатШифрования
						,@Соглашение
						,@СтатусПакета
						,@Контрагент
						,@Организация
						,@СпособОбменаЭД
						,@Комментарий
						,@ВнешнийУИД)";
					}
					else
					{
						Команда.CommandText = @"
						Update _Document23158
						Set
						/*_IDRRef	= @Ссылка*/
						/*,_Version	= @Версия*/
						_Marked	= @ПометкаУдаления
						,_Number	= @Номер
						,_Fld24715RRef	= @Направление
						,_Fld24716	= @Получатель
						,_Fld24717	= @Отправитель
						,_Fld24718	= @ДанныеЗашифрованы
						,_Fld24720	= @АдресРесурсаКонтрагента
						,_Fld24721	= @СертификатШифрования
						,_Fld24722RRef	= @Соглашение
						,_Fld24723RRef	= @СтатусПакета
						,_Fld24724RRef	= @Контрагент
						,_Fld24725RRef	= @Организация
						,_Fld24726RRef	= @СпособОбменаЭД
						,_Fld24727	= @Комментарий
						,_Fld24728	= @ВнешнийУИД
						Where _IDRRef = @Ссылка";
					}
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					/*Команда.Parameters.AddWithValue("Версия", Версия);*/
					Команда.Parameters.AddWithValue("ПометкаУдаления", ПометкаУдаления);
					Команда.Parameters.AddWithValue("Номер", Номер);
					Команда.Parameters.AddWithValue("Направление", Направление.Ключ());
					Команда.Parameters.AddWithValue("Получатель", Получатель);
					Команда.Parameters.AddWithValue("Отправитель", Отправитель);
					Команда.Parameters.AddWithValue("ДанныеЗашифрованы", ДанныеЗашифрованы);
					Команда.Parameters.AddWithValue("АдресРесурсаКонтрагента", АдресРесурсаКонтрагента);
					Команда.Parameters.AddWithValue("СертификатШифрования", СертификатШифрования);
					Команда.Parameters.AddWithValue("СтатусПакета", СтатусПакета.Ключ());
					Команда.Parameters.AddWithValue("СпособОбменаЭД", СпособОбменаЭД.Ключ());
					Команда.Parameters.AddWithValue("Комментарий", Комментарий);
					Команда.Parameters.AddWithValue("ВнешнийУИД", ВнешнийУИД);
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
					Команда.CommandText = @"Delete _Document23158
					Where _IDRRef=@Ссылка";
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					Команда.ExecuteNonQuery();
				}
			}
		}
	}
}