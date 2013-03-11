Ext.define('Справочники.ОбщероссийскийКлассификаторПродукции.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	height: 344,width: 604,
	iconCls: 'bogus',
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
					text:'Картинка',
				},
				{
					text:'Код',
				},
				{
					text:'Наименование',
				},
				{
					text:'КонтрольноеЧисло',
				},
				{
					text:'Комментарий',
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
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:604px;height:25px;',
			items:
			[
				{
					text:'ЗагрузитьКлассификатор',
				},
			]
		},
	]
});