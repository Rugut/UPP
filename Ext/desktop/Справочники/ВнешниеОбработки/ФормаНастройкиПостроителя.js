Ext.define('Справочники.ВнешниеОбработки.ФормаНастройкиПостроителя',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:400px;height:267px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Настройка условий',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:242px;width:400px;height:25px;',
			items:
			[
				{
					text:'Справка',
				},
				'-',
				{
					text:'',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:32px;width:384px;height:202px;',
			height: 202,width: 384,
			columns:
			[
				{
					text:'',
					width:'20',
				},
				{
					text:'Поле',
					width:'100',
				},
				{
					text:'Тип сравнения',
					width:'60',
				},
				{
					text:'Значение',
					width:'100',
				},
				{
					text:'С',
					width:'100',
				},
				{
					text:'По',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:8px;width:384px;height:24px;',
			items:
			[
			]
		},
	]
});