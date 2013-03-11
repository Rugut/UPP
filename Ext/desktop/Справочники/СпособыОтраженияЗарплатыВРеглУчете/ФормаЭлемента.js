Ext.define('Справочники.СпособыОтраженияЗарплатыВРеглУчете.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 408,width: 585,
	iconCls: 'bogus',
	title: 'Способы отражения зарплаты в регламентированном учете',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:96px;top:33px;width:481px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Родитель',
			style: 'position:absolute;left:96px;top:56px;width:481px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:585px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:383px;width:585px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'ОсновныеДействияФормыОК',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'ОсновныеДействияФормыСохранить',
				},
				{
					text:'ОсновныеДействияФормыЗакрыть',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:79px;width:569px;height:296px;',
			height: 296,width: 569,
			items:
			[
				{
					title:'НастройкаСпособаОтражения',
				},
				{
					title:'НеОтражатьВБухучете',
				},
				{
					title:'РаспределятьПоБазовымНачислениям',
				},
			]
		},
	]
});