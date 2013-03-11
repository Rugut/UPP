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
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетДт',
			style: 'position:absolute;left:98px;top:27px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СубконтоДт1',
			style: 'position:absolute;left:98px;top:50px;width:180px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СубконтоДт2',
			style: 'position:absolute;left:98px;top:73px;width:180px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СубконтоДт3',
			style: 'position:absolute;left:98px;top:96px;width:180px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетКт',
			style: 'position:absolute;left:389px;top:27px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СубконтоКт1',
			style: 'position:absolute;left:389px;top:50px;width:180px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СубконтоКт2',
			style: 'position:absolute;left:389px;top:73px;width:180px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СубконтоКт3',
			style: 'position:absolute;left:389px;top:96px;width:180px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетДтНУ',
			style: 'position:absolute;left:98px;top:162px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СубконтоДтНУ1',
			style: 'position:absolute;left:98px;top:185px;width:180px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СубконтоДтНУ2',
			style: 'position:absolute;left:98px;top:208px;width:180px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СубконтоДтНУ3',
			style: 'position:absolute;left:98px;top:231px;width:180px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетКтНУ',
			style: 'position:absolute;left:389px;top:162px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СубконтоКтНУ1',
			style: 'position:absolute;left:389px;top:185px;width:180px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СубконтоКтНУ2',
			style: 'position:absolute;left:389px;top:208px;width:180px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СубконтоКтНУ3',
			style: 'position:absolute;left:389px;top:231px;width:180px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОтражениеВУСН',
			style: 'position:absolute;left:98px;top:277px;width:471px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СубконтоКт1Строка',
			style: 'position:absolute;left:389px;top:50px;width:180px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СубконтоКтНУ1Строка',
			style: 'position:absolute;left:389px;top:185px;width:180px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СубконтоКт2Строка',
			style: 'position:absolute;left:389px;top:73px;width:180px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СубконтоКт3Строка',
			style: 'position:absolute;left:389px;top:96px;width:180px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СубконтоКтНУ2Строка',
			style: 'position:absolute;left:389px;top:208px;width:180px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СубконтоКтНУ3Строка',
			style: 'position:absolute;left:389px;top:231px;width:180px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СубконтоДтНУ1Строка',
			style: 'position:absolute;left:98px;top:185px;width:180px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СубконтоДтНУ2Строка',
			style: 'position:absolute;left:98px;top:208px;width:180px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СубконтоДтНУ3Строка',
			style: 'position:absolute;left:98px;top:231px;width:180px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СубконтоДт1Строка',
			style: 'position:absolute;left:98px;top:50px;width:180px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СубконтоДт2Строка',
			style: 'position:absolute;left:98px;top:73px;width:180px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СубконтоДт3Строка',
			style: 'position:absolute;left:98px;top:96px;width:180px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СпособРаспределенияЗатрат',
			style: 'position:absolute;left:98px;top:119px;width:180px;height:19px;',
		},
					]
				},
				{
					title:'НеОтражатьВБухучете',
					items:
					[
					]
				},
				{
					title:'РаспределятьПоБазовымНачислениям',
				},
			]
		},
	]
});