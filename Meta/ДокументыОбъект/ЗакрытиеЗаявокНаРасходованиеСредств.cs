
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
	public partial class ЗакрытиеЗаявокНаРасходованиеСредств:ДокументОбъект
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
		public V82.СправочникиСсылка.Пользователи Ответственный {get;set;}
		[DataMember]
		[ProtoMember(10)]
		public bool ОтборЦФО {get;set;}//Отбор по ЦФО
		[DataMember]
		[ProtoMember(11)]
		public V82.СправочникиСсылка.Подразделения ЦФО {get;set;}
		[DataMember]
		[ProtoMember(12)]
		public bool ОтборОтветственный {get;set;}//Отбор ответственный
		///<summary>
		///Ответственный для отбора заявок
		///</summary>
		[DataMember]
		[ProtoMember(13)]
		public V82.СправочникиСсылка.Пользователи ОтветственныйЗаявка {get;set;}//Ответственный заявка
		[DataMember]
		[ProtoMember(14)]
		public bool ОтборКонтрагент {get;set;}//Отбор по контрагенту
		[DataMember]
		[ProtoMember(15)]
		public V82.СправочникиСсылка.Контрагенты Контрагент {get;set;}
		[DataMember]
		[ProtoMember(16)]
		public V82.Перечисления/*Ссылка*/.СостоянияОбъектов Состояние {get;set;}
		///<summary>
		///Любая дополнительная информация
		///</summary>
		[DataMember]
		[ProtoMember(17)]
		public string/*(0)*/ Комментарий {get;set;}
		[DataMember]
		[ProtoMember(18)]
		public DateTime ОтборДатаНач {get;set;}//Дата начала отбора
		[DataMember]
		[ProtoMember(19)]
		public DateTime ОтборДатаКон {get;set;}//Дата конца отбора
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
						Insert Into _Document369(
						_IDRRef
						/*,_Version*/
						,_Marked
						,_IsMetadata
						,_Number
						,_Fld7251RRef
						,_Fld7252
						,_Fld7253RRef
						,_Fld7254
						,_Fld7255RRef
						,_Fld7256
						,_Fld7257RRef
						,_Fld7258RRef
						,_Fld7259
						,_Fld7260
						,_Fld7261)
						Values(
						@Ссылка
						/*,@Версия*/
						,@ПометкаУдаления
						,@Номер
						,@Ответственный
						,@ОтборЦФО
						,@ЦФО
						,@ОтборОтветственный
						,@ОтветственныйЗаявка
						,@ОтборКонтрагент
						,@Контрагент
						,@Состояние
						,@Комментарий
						,@ОтборДатаНач
						,@ОтборДатаКон)";
					}
					else
					{
						Команда.CommandText = @"
						Update _Document369
						Set
						/*_IDRRef	= @Ссылка*/
						/*,_Version	= @Версия*/
						_Marked	= @ПометкаУдаления
						,_Number	= @Номер
						,_Fld7251RRef	= @Ответственный
						,_Fld7252	= @ОтборЦФО
						,_Fld7253RRef	= @ЦФО
						,_Fld7254	= @ОтборОтветственный
						,_Fld7255RRef	= @ОтветственныйЗаявка
						,_Fld7256	= @ОтборКонтрагент
						,_Fld7257RRef	= @Контрагент
						,_Fld7258RRef	= @Состояние
						,_Fld7259	= @Комментарий
						,_Fld7260	= @ОтборДатаНач
						,_Fld7261	= @ОтборДатаКон
						Where _IDRRef = @Ссылка";
					}
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					/*Команда.Parameters.AddWithValue("Версия", Версия);*/
					Команда.Parameters.AddWithValue("ПометкаУдаления", ПометкаУдаления);
					Команда.Parameters.AddWithValue("Номер", Номер);
					Команда.Parameters.AddWithValue("ОтборЦФО", ОтборЦФО);
					Команда.Parameters.AddWithValue("ОтборОтветственный", ОтборОтветственный);
					Команда.Parameters.AddWithValue("ОтборКонтрагент", ОтборКонтрагент);
					Команда.Parameters.AddWithValue("Состояние", Состояние.Ключ());
					Команда.Parameters.AddWithValue("Комментарий", Комментарий);
					Команда.Parameters.AddWithValue("ОтборДатаНач", ОтборДатаНач);
					Команда.Parameters.AddWithValue("ОтборДатаКон", ОтборДатаКон);
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
					Команда.CommandText = @"Delete _Document369
					Where _IDRRef=@Ссылка";
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					Команда.ExecuteNonQuery();
				}
			}
		}
	}
}