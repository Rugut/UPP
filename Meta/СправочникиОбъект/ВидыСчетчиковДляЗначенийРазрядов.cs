
using System;
using System.Data.SqlClient;
using System.Globalization;
using System.Runtime.Serialization;
using ProtoBuf;/*https://github.com/ServiceStack/ServiceStack/tree/master/lib*/
using ServiceStack.Text;/*https://github.com/ServiceStack/ServiceStack.Text*/
using V82;
using V82.ОбщиеОбъекты;
using V82.СправочникиСсылка;
using V82.СправочникиОбъект;
using V82.ДокументыСсылка;
using V82.Перечисления;//Ссылка;
namespace V82.СправочникиОбъект
{
	[ProtoContract]
	[DataContract]
	public partial class ВидыСчетчиковДляЗначенийРазрядов:СправочникОбъект
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
		public bool Предопределенный {get;set;}
		[DataMember]
		[ProtoMember(6)]
		public string/*9*/ Код {get;set;}
		[DataMember]
		[ProtoMember(7)]
		public string/*50*/ Наименование {get;set;}
		[DataMember]
		[ProtoMember(8)]
		public decimal/*(2)*/ РазмерСчетчика {get;set;}//Размер счетчика
		[DataMember]
		[ProtoMember(9)]
		public bool ВПределахОрганизации {get;set;}//В пределах организации
		[DataMember]
		[ProtoMember(10)]
		public bool ВПределахПодразделения {get;set;}//В пределах подразделения
		[DataMember]
		[ProtoMember(11)]
		public bool ВПределахНоменклатурнойГруппы {get;set;}//В пределах номенклатурной группы
		[DataMember]
		[ProtoMember(12)]
		public bool ВПределахНоменклатуры {get;set;}//В пределах номенклатуры
		[DataMember]
		[ProtoMember(13)]
		public decimal/*(20)*/ НачальноеЗначение {get;set;}//Начальное значение
		[DataMember]
		[ProtoMember(14)]
		public decimal/*(20)*/ КонечноеЗначение {get;set;}//Конечное значение
		public void Записать()
		{
			//Установка блокировки элемента на горизантально масштабированный кластер.
			//Опционально введение тайм аута на запись одного и того же объекта, не чаще раза в 5-секунд. Защита от спама. упращение алгоритма блокировки.
			//Выделение сервиса для блокировки элемента и генерации кода
			//Выполнение операций контроля без обращений к sql-серверу.
			//Контроль конфликта блокировок.
			//Контроль загрузки булкинсертом гетерогенной коллекции.
			//Контроль уникальности кода для справочников.
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
						Insert Into _Reference26(
						_IDRRef
						/*,_Version*/
						,_Marked
						,_IsMetadata
						,_Code
						,_Description
						,_Fld954
						,_Fld955
						,_Fld956
						,_Fld957
						,_Fld958
						,_Fld959
						,_Fld960)
						Values(
						@Ссылка
						/*,@Версия*/
						,@ПометкаУдаления
						,@Предопределенный
						,@Код
						,@Наименование
						,@РазмерСчетчика
						,@ВПределахОрганизации
						,@ВПределахПодразделения
						,@ВПределахНоменклатурнойГруппы
						,@ВПределахНоменклатуры
						,@НачальноеЗначение
						,@КонечноеЗначение)";
					}
					else
					{
						Команда.CommandText = @"
						Update _Reference26
						Set
						/*_IDRRef	= @Ссылка*/
						/*,_Version	= @Версия*/
						_Marked	= @ПометкаУдаления
						,_IsMetadata	= @Предопределенный
						,_Code	= @Код
						,_Description	= @Наименование
						,_Fld954	= @РазмерСчетчика
						,_Fld955	= @ВПределахОрганизации
						,_Fld956	= @ВПределахПодразделения
						,_Fld957	= @ВПределахНоменклатурнойГруппы
						,_Fld958	= @ВПределахНоменклатуры
						,_Fld959	= @НачальноеЗначение
						,_Fld960	= @КонечноеЗначение
						Where _IDRRef = @Ссылка";
					}
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					/*Команда.Parameters.AddWithValue("Версия", Версия);*/
					Команда.Parameters.AddWithValue("ПометкаУдаления", ПометкаУдаления);
					Команда.Parameters.AddWithValue("Предопределенный", Предопределенный);
					Команда.Parameters.AddWithValue("Код", Код);
					Команда.Parameters.AddWithValue("Наименование", Наименование);
					Команда.Parameters.AddWithValue("РазмерСчетчика", РазмерСчетчика);
					Команда.Parameters.AddWithValue("ВПределахОрганизации", ВПределахОрганизации);
					Команда.Parameters.AddWithValue("ВПределахПодразделения", ВПределахПодразделения);
					Команда.Parameters.AddWithValue("ВПределахНоменклатурнойГруппы", ВПределахНоменклатурнойГруппы);
					Команда.Parameters.AddWithValue("ВПределахНоменклатуры", ВПределахНоменклатуры);
					Команда.Parameters.AddWithValue("НачальноеЗначение", НачальноеЗначение);
					Команда.Parameters.AddWithValue("КонечноеЗначение", КонечноеЗначение);
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
					Команда.CommandText = @"Delete _Reference26
					Where _IDRRef=@Ссылка";
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					Команда.ExecuteNonQuery();
				}
			}
		}
	}
}