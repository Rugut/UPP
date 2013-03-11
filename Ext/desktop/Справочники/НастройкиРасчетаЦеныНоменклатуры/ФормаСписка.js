Ext.define('Справочники.НастройкиРасчетаЦеныНоменклатуры.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	height: 300,width: 793,
	iconCls: 'bogus',
	title: 'Настройки расчета цены номенклатуры',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:174px;top:33px;width:611px;height:259px;',
			height: 259,width: 611,
			columns:
			[
				{
					text:'Картинка',
				},
				{
					text:'Наименование',
				},
				{
					text:'ТипЦен',
				},
				{
					text:'СоздаватьНовыйДокумент',
				},
				{
					text:'ФормироватьДокументыАвтоматически',
				},
				{
					text:'ОтражатьВУправленческомУчете',
				},
				{
					text:'ОтражатьВРегламентированномУчете',
				},
				{
					text:'Комментарий',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:793px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:160px;height:259px;',
			height: 259,width: 160,
			columns:
			[
				{
					text:'Наименование',
				},
			]
		},
	]
});