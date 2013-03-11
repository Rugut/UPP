Ext.define('Справочники.ХарактеристикиНоменклатуры.ФормаВыбораСОтбором',
	{
	extend: 'Ext.window.Window',
	height: 486,width: 396,
	iconCls: 'bogus',
	title: 'Выбор характеристики номенклатуры по значениям свойств',
	
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
					text:'ДействиеИзменить',
				},
				{
					text:'ДействиеЗакончитьРедактирование',
				},
				{
					text:'ДействиеПеречитать',
				},
				{
					text:'ДействиеУдалить',
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
					text:'ПометкаУдаления',
				},
				{
					text:'Характеристика',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:257px;width:380px;height:24px;',
			items:
			[
				{
					text:'ДействиеДобавить',
				},
				{
					text:'ДействиеВыбрать',
				},
				{
					text:'ДействиеУдалить',
				},
				{
					text:'ДействиеИзменить',
				},
				{
					text:'ДействиеОбновить',
				},
				{
					text:'ДействиеЗакончитьРедактирование',
				},
			]
		},
	]
});