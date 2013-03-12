Ext.define('Справочники.ОбщероссийскийКлассификаторПродукции.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:604px;height:344px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Справочник Общероссийский классификатор продукции',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:158px;top:33px;width:438px;height:303px;',
			height: 303,width: 438,
			columns:
			[
				{
					text:'',
					width:'33',
				},
				{
					text:'Код',
					width:'59',
				},
				{
					text:'Наименование',
					width:'280',
				},
				{
					text:'Контрольное число',
					width:'36',
				},
				{
					text:'Комментарий',
					width:'255',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:145px;height:303px;',
			height: 303,width: 145,
			columns:
			[
				{
					text:'Наименование',
					width:'141',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:604px;height:25px;',
			items:
			[
				{
					text:'Загрузить классификатор',
				},
			]
		},
	]
});