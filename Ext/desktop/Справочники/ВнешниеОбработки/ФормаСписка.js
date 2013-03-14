Ext.define('Справочники.ВнешниеОбработки.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:608px;height:321px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Дополнительные печатные формы, обработки, заполнение табличных частей',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:608px;height:25px;',
			items:
			[
				{
					text:'Доступ к текущему элементу',
				},
				{
					text:'Доступ к справочнику в целом',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:167px;top:33px;width:433px;height:280px;',
			height: 280,width: 433,
			columns:
			[
				{
					text:'',
					width:'39',
				},
				{
					text:'Наименование',
					width:'220',
				},
				{
					text:'Вид обработки',
					width:'120',
				},
				{
					text:'Код',
					width:'40',
				},
				{
					text:'Комментарий',
					width:'120',
				},
				{
					text:'Комментарий к файлу источнику',
					width:'120',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:153px;height:280px;',
			height: 280,width: 153,
			columns:
			[
				{
					text:'Наименование',
					width:'143',
				},
			]
		},
	]
});