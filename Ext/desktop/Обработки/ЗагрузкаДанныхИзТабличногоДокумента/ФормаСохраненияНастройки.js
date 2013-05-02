Ext.define('Обработки.ЗагрузкаДанныхИзТабличногоДокумента.ФормаСохраненияНастройки',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:411px;height:241px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Сохранение настройки',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьНаименованиеНастройки',
			text: 'Наименование настройки:',
			style: 'position:absolute;left:8px;top:8px;width:309px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НаименованиеНастройки',
			style: 'position:absolute;left:8px;top:27px;width:309px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'ОК',
			text: 'ОК',
			style: 'position:absolute;left:329px;top:27px;width:74px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'Отмена',
			text: 'Отмена',
			style: 'position:absolute;left:329px;top:51px;width:74px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'Удалить',
			text: 'Удалить',
			style: 'position:absolute;left:329px;top:75px;width:74px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Использовать по умолчанию',
			style: 'position:absolute;left:8px;top:51px;width:309px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:75px;width:309px;height:158px;',
			height: 158,width: 309,
			columns:
			[
				{
					text:'Колонка1',
					width:'100',
					dataIndex:'Колонка1',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ЗагрузкаДанныхИзТабличногоДокумента/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Колонка1',
					},
				]
			},
		},
	]
});