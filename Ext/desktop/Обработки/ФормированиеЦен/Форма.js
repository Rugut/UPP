Ext.define('Обработки.ФормированиеЦен.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:670px;height:331px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Обработка  Формирование цен',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:34px;width:484px;height:24px;',
			items:
			[
				{
					text:'Установить флажки',
				},
				{
					text:'Снять флажки',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:58px;width:656px;height:220px;',
			height: 220,width: 656,
			columns:
			[
				{
					text:'№',
					width:'30',
				},
				{
					text:'',
					width:'20',
				},
				{
					text:'Номенклатура',
					width:'144',
				},
				{
					text:'Характеристика номенклатуры',
					width:'103',
				},
				{
					text:'Цена базовая',
					width:'84',
				},
				{
					text:'Валюта базовая',
					width:'97',
				},
				{
					text:'Способ расчета',
					width:'137',
				},
				{
					text:'% скидки (наценки)',
					width:'46',
				},
				{
					text:'Цена',
					width:'75',
				},
				{
					text:'Валюта',
					width:'77',
				},
				{
					text:'Единица измерения',
					width:'55',
				},
			]
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Пересчитывать цену при изменении других реквизитов',
			style: 'position:absolute;left:6px;top:283px;width:307px;height:15px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаВеличиныИзменения',
			style: 'position:absolute;left:464px;top:6px;width:48px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаВыполнить',
			text: 'Выполнить',
			style: 'position:absolute;left:582px;top:6px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаВариантаЗачения',
			style: 'position:absolute;left:228px;top:6px;width:200px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаЦен',
			text: 'Дата чтения цен:',
			style: 'position:absolute;left:492px;top:37px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаЦен',
			style: 'position:absolute;left:582px;top:37px;width:80px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:306px;width:670px;height:25px;',
			items:
			[
				{
					text:'ОК',
				},
				{
					text:'Закрыть',
				},
				'-',
			]
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Подставлять валюту из диапазона',
			style: 'position:absolute;left:466px;top:283px;width:196px;height:15px;',
		},
	]
});