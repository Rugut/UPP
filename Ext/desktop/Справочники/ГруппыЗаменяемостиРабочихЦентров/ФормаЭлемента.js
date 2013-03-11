Ext.define('Справочники.ГруппыЗаменяемостиРабочихЦентров.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 353,width: 430,
	iconCls: 'bogus',
	title: 'Группы заменяемости рабочих центров',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:358px;top:33px;width:64px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:94px;top:33px;width:220px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:430px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:328px;width:430px;height:25px;',
			items:
			[
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
				{
					text:'Действие2',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:60px;width:414px;height:260px;',
			height: 260,width: 414,
			items:
			[
				{
					title:'СтраницаСоставГруппы',
				},
				{
					title:'СтраницаПодчиненныеРабочиеЦентры',
				},
			]
		},
	]
});