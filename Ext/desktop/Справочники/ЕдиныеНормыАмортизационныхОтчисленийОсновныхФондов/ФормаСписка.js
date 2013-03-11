Ext.define('Справочники.ЕдиныеНормыАмортизационныхОтчисленийОсновныхФондов.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	height: 321,width: 731,
	iconCls: 'bogus',
	title: 'Единые нормы амортизационных отчислений на полное восстановление основных фондов',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:185px;top:33px;width:538px;height:280px;',
			height: 280,width: 538,
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
					text:'НормаАмортизационныхОтчислений',
				},
				{
					text:'ПроцентОтСтоимостиМашины',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:731px;height:25px;',
			items:
			[
				{
					text:'Разделитель5',
				},
				{
					text:'ЗагрузитьКлассификатор',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:171px;height:280px;',
			height: 280,width: 171,
			columns:
			[
				{
					text:'Наименование',
				},
			]
		},
	]
});