Ext.define('Справочники.ГруппыДоступностиСкладов.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 273,width: 467,
	iconCls: 'bogus',
	title: 'Группы доступности складов',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:411px;top:33px;width:48px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:93px;top:33px;width:283px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:467px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:248px;width:467px;height:25px;',
			items:
			[
				{
					text:'Действие2',
				},
				{
					text:'Действие1',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель1',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:57px;width:451px;height:183px;',
			height: 183,width: 451,
			columns:
			[
				{
					text:'Картинка',
				},
				{
					text:'Склад',
				},
			]
		},
	]
});