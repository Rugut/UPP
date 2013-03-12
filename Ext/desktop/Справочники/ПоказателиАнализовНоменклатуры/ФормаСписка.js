Ext.define('Справочники.ПоказателиАнализовНоменклатуры.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:550px;height:360px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Справочник Показатели анализов номенклатуры',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:159px;top:33px;width:383px;height:319px;',
			height: 319,width: 383,
			columns:
			[
				{
					text:'',
					width:'33',
				},
				{
					text:'Код',
					width:'60',
				},
				{
					text:'Наименование',
					width:'289',
				},
				{
					text:'Вид результата анализа',
					width:'91',
				},
				{
					text:'Минимальное значение',
					width:'84',
				},
				{
					text:'Максимальное значение',
					width:'88',
				},
				{
					text:'Единица измерения',
					width:'175',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:145px;height:319px;',
			height: 319,width: 145,
			columns:
			[
				{
					text:'Наименование',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:550px;height:25px;',
			items:
			[
			]
		},
	]
});