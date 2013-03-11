Ext.define('Документы.Опрос.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 524,width: 426,
	iconCls: 'bogus',
	title: 'Опрос',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:426px;height:25px;',
			items:
			[
				{
					text:'ДействиеОткрытьСвойства',
				},
				{
					text:'Подменю',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'ДействиеОткрытьКатегории',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'ОбновитьСоставВопросов',
				},
				{
					text:'РедактироватьКодНомер',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:499px;width:426px;height:25px;',
			items:
			[
				{
					text:'ОсновныеДействияФормыЗакрыть',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Записать',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'ЗавершитьОпрос',
				},
				{
					text:'ОК',
				},
				{
					text:'Разделитель',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:33px;width:410px;height:52px;',
			height: 52,width: 410,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОпрашиваемоеЛицо',
			style: 'position:absolute;left:114px;top:1px;width:296px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ТиповаяАнкета',
			style: 'position:absolute;left:114px;top:26px;width:296px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:312px;top:399px;width:106px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:122px;top:399px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:122px;top:424px;width:296px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:122px;top:472px;width:296px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:85px;width:410px;height:258px;',
			height: 258,width: 410,
			items:
			[
				{
					title:'Опрос',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:0px;width:410px;height:258px;',
			height: 258,width: 410,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'Раздел',
				},
				{
					text:'Вопрос',
				},
				{
					text:'ТиповойОтвет',
				},
			]
		},
					]
				},
				{
					title:'Тестирование',
					items:
					[
		{
			xtype: 'button',
			name: 'КнопкаНачатьТестирование',
			text: 'Начать тестирование',
			style: 'position:absolute;left:145px;top:137px;width:120px;height:20px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:448px;width:410px;height:24px;',
			height: 24,width: 410,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Рассылка',
			style: 'position:absolute;left:114px;top:0px;width:296px;height:19px;',
		},
					]
				},
			]
		},
	]
});