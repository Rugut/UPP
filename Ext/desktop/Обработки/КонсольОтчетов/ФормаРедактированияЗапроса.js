Ext.define('Обработки.КонсольОтчетов.ФормаРедактированияЗапроса',
	{
	extend: 'Ext.window.Window',
	height: 309,width: 400,
	iconCls: 'bogus',
	title: 'Редактирование запроса',
	
	items:
	[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:6px;width:388px;height:270px;',
			height: 270,width: 388,
			items:
			[
				{
					title:'Запрос',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Имя',
			style: 'position:absolute;left:40px;top:6px;width:322px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:234px;top:238px;width:128px;height:24px;',
			items:
			[
				{
					text:'КонструкторЗапросов',
				},
				{
					text:'Проверить',
				},
			]
		},
					]
				},
				{
					title:'Параметры',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:356px;height:24px;',
			items:
			[
				{
					text:'Действие2',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие3',
				},
				{
					text:'ЗаполнитьПараметры',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие9',
				},
				{
					text:'Действие5',
				},
				{
					text:'Разделитель',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:34px;width:356px;height:228px;',
			height: 228,width: 356,
			columns:
			[
				{
					text:'ИмяПараметра',
				},
				{
					text:'ЭтоВыражение',
				},
				{
					text:'ЗначениеПараметра',
				},
			]
		},
					]
				},
				{
					title:'Представления',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:6px;width:356px;height:256px;',
			height: 256,width: 356,
			columns:
			[
				{
					text:'Поле',
				},
				{
					text:'Представление',
				},
				{
					text:'Формат',
				},
			]
		},
					]
				},
				{
					title:'ВыводОтчета',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОтчетРасшифровкиРедактор',
			style: 'position:absolute;left:148px;top:156px;width:145px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:285px;width:400px;height:24px;',
			items:
			[
				{
					text:'Подменю',
				},
				{
					text:'Справка',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'ОК',
				},
			]
		},
	]
});