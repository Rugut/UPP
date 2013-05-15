Ext.define('Обработки.КонсольОтчетов.ФормаСохраненияНастроек',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:398px;height:250px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Сохранение настройки',
	
	items:
	[
		{
			xtype: 'button',
			name: 'КнопкаВыполнить',
			text: 'ОК',
			style: 'position:absolute;left:291px;top:8px;width:99px;height:22px;',
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Наименование настройки:',
			style: 'position:absolute;left:8px;top:8px;width:144px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'НаименованиеНастройки',
			style: 'position:absolute;left:8px;top:31px;width:260px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Использовать при открытии',
			style: 'position:absolute;left:8px;top:54px;width:171px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:77px;width:260px;height:140px;',
			height: 140,width: 260,
			columns:
			[
				{
					text:'',
					width:'0',
					dataIndex:'',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/КонсольОтчетов/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'',
					},
				]
			},
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Сохранять автоматически',
			style: 'position:absolute;left:8px;top:222px;width:200px;height:20px;',
		},
		{
			xtype: 'button',
			name: 'Отмена',
			text: 'Отмена',
			style: 'position:absolute;left:291px;top:35px;width:99px;height:22px;',
		},
		{
			xtype: 'button',
			name: 'Удалить',
			text: 'Удалить',
			style: 'position:absolute;left:291px;top:62px;width:99px;height:22px;',
		},
		{
			xtype: 'button',
			name: 'Справка',
			text: 'Справка',
			style: 'position:absolute;left:291px;top:89px;width:99px;height:22px;',
		},
	],
	dockedItems:
	[
	]
});