Ext.define('Обработки.ТОЗагрузкаККМOffline.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:780px;height:442px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Обработка  Загрузка ККМ Off-Line',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:780px;height:25px;',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				{
					text:'Редактировать список выгрузки',
				},
				{
					text:'Заполнить',
				},
				{
					text:'Загрузить в ККМ',
				},
				'-',
				{
					text:'Восстановить значения...',
				},
				{
					text:'Сохранить значения...',
				},
				'-',
				{
					text:'Справка',
				},
					]
				},
				'-',
				{
					text:'Восстановить значения...',
				},
				{
					text:'Сохранить значения...',
				},
				'-',
				{
					text:'Редактировать список выгрузки',
				},
				'-',
				{
					text:'Заполнить',
				},
				'-',
				{
					text:'Загрузить в ККМ',
				},
				'-',
				{
					text:'Справка',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ТекущийСклад',
			style: 'position:absolute;left:115px;top:33px;width:404px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСклад',
			text: 'Склад:',
			style: 'position:absolute;left:8px;top:33px;width:94px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьККМ',
			text: 'ККМ Offline:',
			style: 'position:absolute;left:8px;top:57px;width:94px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ККМOffline',
			style: 'position:absolute;left:115px;top:57px;width:404px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Только имеющиеся на складе',
			style: 'position:absolute;left:8px;top:105px;width:188px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:132px;width:764px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:157px;width:764px;height:277px;',
			height: 277,width: 764,
			columns:
			[
				{
					text:'Код ККМ',
					width:'56',
				},
				{
					text:'Код товара',
					width:'120',
				},
				{
					text:'Номенклатура',
					width:'250',
				},
				{
					text:'Ед.',
					width:'50',
				},
				{
					text:'Характеристика номенклатуры',
					width:'250',
				},
				{
					text:'Серия номенклатуры',
					width:'250',
				},
				{
					text:'Цена',
					width:'80',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьТипЦен',
			text: 'Тип цен:',
			style: 'position:absolute;left:8px;top:81px;width:94px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ТипЦен',
			style: 'position:absolute;left:115px;top:81px;width:404px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИнформацияОККМ',
			text: 'Информация о ККМ',
			style: 'position:absolute;left:523px;top:33px;width:249px;height:97px;',
		},
	]
});