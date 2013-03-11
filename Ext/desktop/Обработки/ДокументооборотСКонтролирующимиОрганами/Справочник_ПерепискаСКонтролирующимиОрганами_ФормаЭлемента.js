Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.Справочник_ПерепискаСКонтролирующимиОрганами_ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 543,width: 654,
	iconCls: 'bogus',
	title: 'Переписка с контролирующими органами',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:654px;height:25px;',
			items:
			[
				{
					text:'РазделительОтветить',
				},
				{
					text:'Отправить',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Действие1',
				},
				{
					text:'Ответить',
				},
				{
					text:'Действие3',
				},
				{
					text:'Скопировать',
				},
				{
					text:'РазделительОтправка',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:518px;width:654px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'ОсновныеДействияФормыСохранить',
				},
				{
					text:'ОсновныеДействияФормыЗакрыть',
				},
				{
					text:'ОсновныеДействияФормыОК',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:157px;width:638px;height:353px;',
			height: 353,width: 638,
			items:
			[
				{
					title:'СтраницаСодержание',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Содержание',
			style: 'position:absolute;left:6px;top:6px;width:624px;height:321px;',
		},
					]
				},
				{
					title:'Вложения',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:28px;width:626px;height:24px;',
			items:
			[
				{
					text:'Разделитель3',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие7',
				},
				{
					text:'Выгрузить',
				},
				{
					text:'Действие8',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'Действие3',
				},
				{
					text:'Подменю1',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие6',
				},
				{
					text:'Открыть',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие5',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:52px;width:626px;height:275px;',
			height: 275,width: 626,
			columns:
			[
				{
					text:'ИмяФайла',
				},
				{
					text:'Размер',
				},
				{
					text:'Тип',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:6px;width:626px;height:22px;',
			height: 22,width: 626,
			items:
			[
				{
					title:'Страница1',
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:77px;width:638px;height:80px;',
			height: 80,width: 638,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:85px;top:0px;width:553px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Отправитель',
			style: 'position:absolute;left:85px;top:26px;width:553px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Получатель',
			style: 'position:absolute;left:85px;top:52px;width:553px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:33px;width:638px;height:44px;',
			height: 44,width: 638,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:0px;width:638px;height:36px;',
			height: 36,width: 638,
			items:
			[
				{
					title:'Страница1',
					items:
					[
					]
				},
			]
		},
					]
				},
			]
		},
	]
});