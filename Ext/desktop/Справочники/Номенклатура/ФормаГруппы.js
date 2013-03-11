Ext.define('Справочники.Номенклатура.ФормаГруппы',
	{
	extend: 'Ext.window.Window',
	height: 169,width: 422,
	iconCls: 'bogus',
	title: 'Группа Номенклатура',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:359px;top:60px;width:55px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:117px;top:60px;width:211px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Родитель',
			style: 'position:absolute;left:117px;top:33px;width:297px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:422px;height:25px;',
			items:
			[
				{
					text:'РазделительПрава',
				},
				{
					text:'Права',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:144px;width:422px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие2',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидНоменклатуры',
			style: 'position:absolute;left:117px;top:87px;width:297px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПорядокПрисвоенияСерийногоНомера',
			style: 'position:absolute;left:117px;top:114px;width:297px;height:19px;',
		},
	]
});