Ext.define('Справочники.Контрагенты.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:684px;height:321px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Контрагенты',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:684px;height:25px;',
			items:
			[
				'-',
				{
					text:'Отбор по менеджеру',
				},
				{
					text:'Выбрать',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:33px;width:668px;height:280px;',
			height: 280,width: 668,
			items:
			[
				{
					title:'СписокВыбора',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:166px;top:24px;width:502px;height:256px;',
			height: 256,width: 502,
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
					width:'149',
				},
				{
					text:'ИНН',
					width:'100',
				},
				{
					text:'Полное наименование',
					width:'280',
				},
				{
					text:'Комментарий',
					width:'120',
				},
				{
					text:'Основной менеджер покупателя',
					width:'178',
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
			style: 'position:absolute;left:0px;top:24px;width:160px;height:256px;',
			height: 256,width: 160,
			columns:
			[
				{
					text:'Наименование',
					width:'153',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЗначениеОтбораСпискаКонтрагентов',
			style: 'position:absolute;left:226px;top:0px;width:442px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьЗначениеОтбораСпискаНоменклатуры',
			text: 'содержит:',
			style: 'position:absolute;left:166px;top:0px;width:57px;height:19px;',
		},
					]
				},
				{
					title:'СписокВыбораПоПользователю',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:0px;width:668px;height:280px;',
			height: 280,width: 668,
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
					text:'Полное наименование',
					width:'220',
				},
				{
					text:'Комментарий',
					width:'100',
				},
			]
		},
					]
				},
			]
		},
	]
});