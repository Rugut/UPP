Ext.define('Документы.ЗаявкаНаСертификациюНоменклатуры.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:664px;height:287px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Заявка на сертификацию номенклатуры',
	
	items:
	[
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:33px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:96px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'от:',
			style: 'position:absolute;left:178px;top:33px;width:16px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:196px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Подразделение:',
			style: 'position:absolute;left:8px;top:208px;width:88px;height:19px;',
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
				'-',
				{
					text:'Действие1',
				},
				'-',
				{
					text:'',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие4',
				},
				{
					text:'',
				},
				{
					text:'Действие6',
				},
				'-',
				'-',
				{
					text:'Движения документа по регистрам',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие7',
				},
				'-',
				{
					text:'Действие',
				},
				{
					text:'Действие2',
				},
				'-',
				'-',
				{
					text:'Действие4',
				},
				{
					text:'Структура подчиненности документа',
				},
				{
					text:'Действие',
				},
				'-',
				'-',
				{
					text:'Действие2',
				},
				'-',
				{
					text:'Действие5',
				},
				{
					text:'',
				},
				'-',
				{
					text:'',
				},
				{
					text:'',
				},
				{
					text:'Действие5',
				},
				'-',
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:262px;width:664px;height:25px;',
			items:
			[
				'-',
				{
					text:'OK',
				},
				{
					text:'Печать',
				},
				{
					text:'Закрыть',
				},
				'-',
				{
					text:'Записать',
				},
				'-',
			]
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:57px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:336px;top:208px;width:100px;height:19px;',
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
			xtype: 'label',
			name: 'Надпись4',
			text: 'Документ оприходования:',
			style: 'position:absolute;left:8px;top:79px;width:88px;height:27px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДокументОприходования',
			style: 'position:absolute;left:96px;top:81px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись7',
			text: 'Номенклатура:',
			style: 'position:absolute;left:8px;top:132px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номенклатура',
			style: 'position:absolute;left:96px;top:132px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись9',
			text: 'Серия :',
			style: 'position:absolute;left:336px;top:132px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СерияНоменклатуры',
			style: 'position:absolute;left:436px;top:132px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись10',
			text: 'Нормативный документ:',
			style: 'position:absolute;left:8px;top:153px;width:88px;height:27px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НормативныйДокумент',
			style: 'position:absolute;left:96px;top:156px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганСертификации',
			text: 'Орган по сертификации:',
			style: 'position:absolute;left:336px;top:78px;width:100px;height:27px;',
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
			xtype: 'label',
			name: 'Надпись12',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:235px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСертифицирующееПодразделение',
			text: 'Сертифицирующее подразделение:',
			style: 'position:absolute;left:336px;top:78px;width:100px;height:27px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СертифицирующееПодразделение',
			style: 'position:absolute;left:436px;top:81px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСклад',
			text: 'Склад:',
			style: 'position:absolute;left:336px;top:57px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Склад',
			style: 'position:absolute;left:436px;top:57px;width:220px;height:19px;',
		},
	]
});