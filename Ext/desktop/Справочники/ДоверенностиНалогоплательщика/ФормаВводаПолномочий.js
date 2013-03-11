Ext.define('Справочники.ДоверенностиНалогоплательщика.ФормаВводаПолномочий',
	{
	extend: 'Ext.window.Window',
	height: 478,width: 863,
	iconCls: 'bogus',
	title: 'Редактирование полномочий представителя',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:453px;width:863px;height:25px;',
			items:
			[
				{
					text:'Действие2',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОКАТО',
			style: 'position:absolute;left:54px;top:10px;width:90px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КПП',
			style: 'position:absolute;left:195px;top:10px;width:90px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:72px;width:847px;height:25px;',
			items:
			[
				{
					text:'УстановитьФлажки',
				},
				{
					text:'СнятьФлажки',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:99px;width:847px;height:346px;',
			height: 346,width: 847,
			columns:
			[
				{
					text:'',
				},
				{
					text:'',
				},
				{
					text:'',
				},
			]
		},
	]
});