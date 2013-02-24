
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
	public partial class ЛичныеКонтакты:СправочникОбъект
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
		public string/*100*/ Наименование {get;set;}
		[DataMember]
		[ProtoMember(8)]
		public string/*(50)*/ Фамилия {get;set;}
		[DataMember]
		[ProtoMember(9)]
		public string/*(50)*/ Имя {get;set;}
		[DataMember]
		[ProtoMember(10)]
		public string/*(50)*/ Отчество {get;set;}
		[DataMember]
		[ProtoMember(11)]
		public DateTime ДатаРождения {get;set;}//Дата рождения
		[DataMember]
		[ProtoMember(12)]
		public string/*(0)*/ Описание {get;set;}
		[DataMember]
		[ProtoMember(13)]
		public bool НапоминатьОДнеРождения {get;set;}//Напоминать о дне рождения
		[DataMember]
		[ProtoMember(14)]
		public decimal/*(2)*/ КоличествоДнейДоНапоминания {get;set;}//Количество дней до напоминания
		[DataMember]
		[ProtoMember(15)]
		public V82.СправочникиСсылка.Пользователи ПользовательДляОграниченияПравДоступа {get;set;}//Пользователь для ограничения прав доступа
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
						Insert Into _Reference133(
						_IDRRef
						/*,_Version*/
						,_Marked
						,_IsMetadata
						,_Code
						,_Description
						,_Fld2519
						,_Fld2520
						,_Fld2521
						,_Fld2522
						,_Fld2523
						,_Fld2524
						,_Fld2525
						,_Fld2526RRef)
						Values(
						@Ссылка
						/*,@Версия*/
						,@ПометкаУдаления
						,@Предопределенный
						,@Код
						,@Наименование
						,@Фамилия
						,@Имя
						,@Отчество
						,@ДатаРождения
						,@Описание
						,@НапоминатьОДнеРождения
						,@КоличествоДнейДоНапоминания
						,@ПользовательДляОграниченияПравДоступа)";
					}
					else
					{
						Команда.CommandText = @"
						Update _Reference133
						Set
						/*_IDRRef	= @Ссылка*/
						/*,_Version	= @Версия*/
						_Marked	= @ПометкаУдаления
						,_IsMetadata	= @Предопределенный
						,_Code	= @Код
						,_Description	= @Наименование
						,_Fld2519	= @Фамилия
						,_Fld2520	= @Имя
						,_Fld2521	= @Отчество
						,_Fld2522	= @ДатаРождения
						,_Fld2523	= @Описание
						,_Fld2524	= @НапоминатьОДнеРождения
						,_Fld2525	= @КоличествоДнейДоНапоминания
						,_Fld2526RRef	= @ПользовательДляОграниченияПравДоступа
						Where _IDRRef = @Ссылка";
					}
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					/*Команда.Parameters.AddWithValue("Версия", Версия);*/
					Команда.Parameters.AddWithValue("ПометкаУдаления", ПометкаУдаления);
					Команда.Parameters.AddWithValue("Предопределенный", Предопределенный);
					Команда.Parameters.AddWithValue("Код", Код);
					Команда.Parameters.AddWithValue("Наименование", Наименование);
					Команда.Parameters.AddWithValue("Фамилия", Фамилия);
					Команда.Parameters.AddWithValue("Имя", Имя);
					Команда.Parameters.AddWithValue("Отчество", Отчество);
					Команда.Parameters.AddWithValue("ДатаРождения", ДатаРождения);
					Команда.Parameters.AddWithValue("Описание", Описание);
					Команда.Parameters.AddWithValue("НапоминатьОДнеРождения", НапоминатьОДнеРождения);
					Команда.Parameters.AddWithValue("КоличествоДнейДоНапоминания", КоличествоДнейДоНапоминания);
					Команда.Parameters.AddWithValue("ПользовательДляОграниченияПравДоступа", ПользовательДляОграниченияПравДоступа.Ссылка);
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
					Команда.CommandText = @"Delete _Reference133
					Where _IDRRef=@Ссылка";
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					Команда.ExecuteNonQuery();
				}
			}
		}
		/*МодульОбъекта*/
		// Обработчик события "ПередЗаписью" Объекта
		//

		public void ПередЗаписью(/*Отказ*/)
		{
			if(true/*ОбменДанными.Загрузка*/)
			{
			}
			//ПользовательДляОграниченияПравДоступа = глЗначениеПеременной("глТекущийПользователь");
		}
	}
}