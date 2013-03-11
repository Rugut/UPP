Ext.define('Документы.ЗаявкаНаСертификациюНоменклатуры.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 287,width: 664,
	iconCls: 'bogus',
	title: 'Заявка на сертификацию номенклатуры',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:96px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:196px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Подразделение',
			style: 'position:absolute;left:96px;top:208px;width:220px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:664px;height:25px;',
			items:
			[
				{
					text:'Действие3',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие1',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие4',
				},
				{
					text:'Подменю2',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие6',
				},
				{
					text:'Разделитель6',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие7',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие',
				},
				{
					text:'Подменю4',
				},
				{
					text:'Действие2',
				},
				{
					text:'Подменю',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Подменю1',
				},
				{
					text:'ПодменюВидаОперации',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Действие4',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Действие2',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие5',
				},
				{
					text:'ДействиеОткрытьСвойства',
				},
				{
					text:'Подменю1',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'ДействиеОткрытьКатегории',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие5',
				},
				{
					text:'Разделитель5',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:262px;width:664px;height:25px;',
			items:
			[
				{
					text:'Разделитель2',
				},
				{
					text:'Действие',
				},
				{
					text:'Печать',
				},
				{
					text:'Действие2',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие1',
				},
				{
					text:'Разделитель1',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:96px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:436px;top:208px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДокументОприходования',
			style: 'position:absolute;left:96px;top:81px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номенклатура',
			style: 'position:absolute;left:96px;top:132px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СерияНоменклатуры',
			style: 'position:absolute;left:436px;top:132px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НормативныйДокумент',
			style: 'position:absolute;left:96px;top:156px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОрганПоСертификации',
			style: 'position:absolute;left:436px;top:81px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:235px;width:560px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СертифицирующееПодразделение',
			style: 'position:absolute;left:436px;top:81px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Склад',
			style: 'position:absolute;left:436px;top:57px;width:220px;height:19px;',
		},
	]
});