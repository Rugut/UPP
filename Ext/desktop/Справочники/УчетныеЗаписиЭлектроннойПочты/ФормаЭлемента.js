Ext.define('Справочники.УчетныеЗаписиЭлектроннойПочты.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 450,width: 582,
	iconCls: 'bogus',
	title: 'Настройки учетной записи',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:517px;top:33px;width:57px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:100px;top:57px;width:474px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'АдресЭлектроннойПочты',
			style: 'position:absolute;left:100px;top:33px;width:368px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:582px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:425px;width:582px;height:25px;',
			items:
			[
				{
					text:'Действие',
				},
				{
					text:'Действие2',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие1',
				},
				{
					text:'Разделитель',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:105px;width:566px;height:312px;',
			height: 312,width: 566,
			items:
			[
				{
					title:'Подключение',
				},
				{
					title:'Письма',
				},
				{
					title:'ПредметыПисем',
				},
				{
					title:'Доступ',
				},
				{
					title:'Подпись',
				},
				{
					title:'ГруппыПисем',
				},
				{
					title:'Дополнительно',
				},
				{
					title:'Фильтры',
				},
				{
					title:'ЭлектронныеДокументы',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НазначениеУчетнойЗаписи',
			style: 'position:absolute;left:100px;top:81px;width:474px;height:19px;',
		},
	]
});