Ext.define('Справочники.ПодразделенияОрганизаций.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 351,width: 526,
	iconCls: 'bogus',
	title: 'Подразделение',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:438px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:91px;top:33px;width:300px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:526px;height:25px;',
			items:
			[
				{
					text:'Действие5',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие4',
				},
				{
					text:'Подменю',
				},
				{
					text:'Действие3',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Действие3',
				},
				{
					text:'РазделительПрава',
				},
				{
					text:'Права',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие2',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Действие1',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:326px;width:526px;height:25px;',
			items:
			[
				{
					text:'Действие',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие2',
				},
				{
					text:'Разделитель',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:135px;width:510px;height:183px;',
			height: 183,width: 510,
			items:
			[
				{
					title:'ОбособленноеПодразделение',
				},
				{
					title:'БухучетЗарплаты',
				},
				{
					title:'СтраховыеВзносы',
				},
				{
					title:'Дополнительно',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидПодразделения',
			style: 'position:absolute;left:91px;top:96px;width:300px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:115px;width:510px;height:16px;',
			height: 16,width: 510,
			items:
			[
				{
					title:'Страница1',
				},
			]
		},
	]
});