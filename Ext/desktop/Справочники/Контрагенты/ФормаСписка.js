Ext.define('Справочники.Контрагенты.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:694px;height:321px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Контрагенты',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:174px;top:57px;width:512px;height:256px;',
			height: 256,width: 512,
			columns:
			[
				{
					text:'',
					width:'32',
				},
				{
					text:'Код',
					width:'40',
				},
				{
					text:'Наименование',
					width:'120',
				},
				{
					text:'ИНН',
					width:'100',
				},
				{
					text:'Полное наименование',
					width:'220',
				},
				{
					text:'Комментарий',
					width:'105',
				},
				{
					text:'Основной менеджер покупателя',
					width:'179',
				},
				{
					text:'Головной контрагент',
					width:'120',
				},
				{
					text:'Документ, удостоверяющий личность',
					width:'120',
				},
				{
					text:'Дополнительное описание',
					width:'120',
				},
				{
					text:'Источник информации при обращении',
					width:'120',
				},
				{
					text:'Код по ОКПО',
					width:'80',
				},
				{
					text:'КПП',
					width:'80',
				},
				{
					text:'Не является резидентом',
					width:'80',
				},
				{
					text:'ОКОПФ',
					width:'80',
				},
				{
					text:'Основное контактное лицо',
					width:'120',
				},
				{
					text:'Основной банковский счет',
					width:'120',
				},
				{
					text:'Основной вид деятельности',
					width:'120',
				},
				{
					text:'Основной договор контрагента',
					width:'120',
				},
				{
					text:'Покупатель',
					width:'80',
				},
				{
					text:'Поставщик',
					width:'80',
				},
				{
					text:'Расписание работы строкой',
					width:'120',
				},
				{
					text:'Регион',
					width:'120',
				},
				{
					text:'Срок выполнения заказа поставщиком (в днях)',
					width:'80',
				},
				{
					text:'Юр. / физ. лицо',
					width:'120',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:57px;width:160px;height:256px;',
			height: 256,width: 160,
			columns:
			[
				{
					text:'Наименование',
					width:'160',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:694px;height:25px;',
			items:
			[
				'-',
				{
					text:'Прочее событие',
				},
				'-',
				{
					text:'Электронное письмо',
				},
				{
					text:'Заказы поставщикам',
				},
				{
					text:'Отчет',
				},
				{
					text:'Заказ покупателя',
				},
				'-',
				'-',
				{
					text:'Продажи',
				},
				{
					text:'Событие """"Электронное письмо""""',
				},
				{
					text:'Телефонный звонок',
				},
				{
					text:'Личная встреча',
				},
				{
					text:'Электронные письма (контрагент)',
				},
				{
					text:'Заказ покупателя',
				},
				{
					text:'Свойства',
				},
				'-',
				'-',
				{
					text:'Электронные письма (контрагент + контактные лица)',
				},
				'-',
				{
					text:'Файлы',
				},
				{
					text:'Заказ поставщику',
				},
				{
					text:'Помощник ввода',
				},
				{
					text:'Событие """"Личная встреча""""',
				},
				{
					text:'Почтовое письмо',
				},
				{
					text:'Категории',
				},
				{
					text:'Прочее',
				},
				'-',
				'-',
				{
					text:'Написать письмо',
				},
				{
					text:'Заказы покупателей',
				},
				{
					text:'Событие """"Почтовое письмо""""',
				},
				{
					text:'Файлы',
				},
				{
					text:'Заказ поставщику',
				},
				'-',
				{
					text:'Список событий',
				},
				'-',
				{
					text:'Событие """"Телефонный звонок""""',
				},
				{
					text:'Ведомость по взаиморасчетам',
				},
				'-',
				'-',
				'-',
				{
					text:'Отчет по контрагенту',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЗначениеОтбораСпискаКонтрагентов',
			style: 'position:absolute;left:235px;top:33px;width:451px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьЗначениеОтбораСпискаНоменклатуры',
			text: 'содержит:',
			style: 'position:absolute;left:174px;top:33px;width:57px;height:19px;',
		},
	]
});