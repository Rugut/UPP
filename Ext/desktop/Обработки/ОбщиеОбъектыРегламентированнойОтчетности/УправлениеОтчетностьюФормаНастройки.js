Ext.define('Обработки.ОбщиеОбъектыРегламентированнойОтчетности.УправлениеОтчетностьюФормаНастройки',
	{
	extend: 'Ext.window.Window',
	height: 497,width: 446,
	iconCls: 'bogus',
	title: 'Настройки',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:472px;width:446px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'Спарвка',
				},
				{
					text:'ОК',
				},
				{
					text:'ОсновныеДействияФормыЗакрыть',
				},
				{
					text:'Разделитель1',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИнтервалАвтосохранения',
			style: 'position:absolute;left:169px;top:381px;width:54px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:118px;width:430px;height:100px;',
			height: 100,width: 430,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИнтервалНапоминаний',
			style: 'position:absolute;left:218px;top:77px;width:54px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:251px;width:430px;height:16px;',
			height: 16,width: 430,
			items:
			[
				{
					title:'Установить',
					items:
					[
					]
				},
				{
					title:'Переустановить',
					items:
					[
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:415px;width:430px;height:46px;',
			height: 46,width: 430,
			items:
			[
				{
					title:'Страница1',
					items:
					[
					]
				},
			]
		},
	]
});