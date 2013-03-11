Ext.define('Справочники.ХарактеристикиНоменклатуры.ФормаВыбораСРасширеннымОтбором',
	{
	extend: 'Ext.window.Window',
	height: 486,width: 396,
	iconCls: 'bogus',
	title: 'Справочник Характеристики номенклатуры',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:461px;width:396px;height:25px;',
			items:
			[
				{
					text:'РазделительЗакрыть',
				},
				{
					text:'КнопкаВыбратьВвестиХарактеристику',
				},
				{
					text:'Закрыть1',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:29px;width:380px;height:24px;',
			items:
			[
				{
					text:'ДействиеДобавить',
				},
				{
					text:'ДействиеУдалить',
				},
				{
					text:'РежимОтбораСодержит',
				},
				{
					text:'ДействиеПеречитать',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ДействиеЗакончитьРедактирование',
				},
				{
					text:'РежимОтбораРавенство',
				},
				{
					text:'РежимОтбора',
				},
				{
					text:'ДействиеИзменить',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:53px;width:380px;height:172px;',
			height: 172,width: 380,
			columns:
			[
				{
					text:'ПометкаУдаления',
				},
				{
					text:'Свойство',
				},
				{
					text:'Значение',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:281px;width:380px;height:172px;',
			height: 172,width: 380,
			columns:
			[
				{
					text:'Характеристика',
				},
				{
					text:'ХарактеристикаСсылка',
				},
				{
					text:'ПометкаУдаления',
				},
				{
					text:'Свойство',
				},
				{
					text:'Значение',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:257px;width:380px;height:24px;',
			items:
			[
				{
					text:'ДействиеОбновить',
				},
				{
					text:'СвернутьВсе',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ДействиеДобавить',
				},
				{
					text:'ДействиеИзменить',
				},
				{
					text:'ДействиеВыбрать',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'РазвернутьВсе',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'ДействиеЗакончитьРедактирование',
				},
				{
					text:'ДействиеУдалить',
				},
				{
					text:'ОтображатьАктивные',
				},
			]
		},
	]
});