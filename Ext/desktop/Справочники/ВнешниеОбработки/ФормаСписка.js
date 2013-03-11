Ext.define('Справочники.ВнешниеОбработки.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	height: 321,width: 608,
	iconCls: 'bogus',
	title: 'Дополнительные печатные формы, обработки, заполнение табличных частей',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:608px;height:25px;',
			items:
			[
				{
					text:'РазделительПрава',
				},
				{
					text:'ПраваДоступаПользователейКоВсемуСправочнику',
				},
				{
					text:'Права',
				},
				{
					text:'ПраваДоступаПользователейКТекущемуЭлементу',
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
					text:'Картинка',
				},
				{
					text:'Наименование',
				},
				{
					text:'ВидОбработки',
				},
				{
					text:'Код',
				},
				{
					text:'Комментарий',
				},
				{
					text:'КомментарийКФайлуИсточнику',
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
				},
			]
		},
	]
});