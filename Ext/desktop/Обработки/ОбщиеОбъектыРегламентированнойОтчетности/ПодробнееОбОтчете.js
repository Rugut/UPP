Ext.define('Обработки.ОбщиеОбъектыРегламентированнойОтчетности.ПодробнееОбОтчете',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:527px;height:403px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Подробнее об отчете',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:378px;width:527px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Закрыть',
				},
				'-',
				{
					text:'Справка',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:28px;width:511px;height:256px;',
			height: 256,width: 511,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница информация о формах доступна',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:0px;width:511px;height:166px;',
			height: 166,width: 511,
			columns:
			[
				{
					text:'Утверждена',
					width:'272',
				},
				{
					text:'Начало действия',
					width:'100',
				},
				{
					text:'Конец действия',
					width:'100',
				},
				{
					text:'Внутренее имя',
					width:'100',
				},
			]
		},
		{
			xtype: 'label',
			name: 'Утверждена',
			text: 'Утверждена',
			style: 'position:absolute;left:6px;top:189px;width:505px;height:67px;text-align:left;',
		},
					]
				},
				{
					title:'Страница информация о формах не доступна',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьИнформацияОтсутствует',
			text: 'Для выбранного вида отчета информация о формах недоступна',
			style: 'position:absolute;left:6px;top:6px;width:499px;height:235px;text-align:center;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьВозможныеПериоды',
			text: '',
			style: 'position:absolute;left:14px;top:304px;width:505px;height:66px;text-align:left;',
		},
	]
});