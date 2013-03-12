Ext.define('Документы.АктОтбораПробНоменклатуры.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:652px;height:400px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Акт отбора проб номенклатуры',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:652px;height:25px;',
			items:
			[
				{
					text:'Действие1',
				},
				'-',
				{
					text:'',
				},
				{
					text:'',
				},
				'-',
				{
					text:'Движения документа по регистрам',
				},
				{
					text:'Действие6',
				},
				'-',
				'-',
				{
					text:'Действие3',
				},
				{
					text:'Действие1',
				},
				'-',
				'-',
				'-',
				'-',
				{
					text:'Действие4',
				},
				{
					text:'Действие3',
				},
				'-',
				{
					text:'',
				},
				{
					text:'Действие4',
				},
				{
					text:'',
				},
				'-',
				{
					text:'Структура подчиненности документа',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие',
				},
				'-',
				{
					text:'Действие7',
				},
				{
					text:'',
				},
				{
					text:'Действие5',
				},
				'-',
				{
					text:'Действие2',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие5',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:375px;width:652px;height:25px;',
			items:
			[
				'-',
				{
					text:'Закрыть',
				},
				'-',
				'-',
				{
					text:'Записать',
				},
				{
					text:'Печать',
				},
				{
					text:'OK',
				},
			]
		},
		{
			xtype: 'label',
			name: 'Надпись5',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:57px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:96px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись9',
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
			name: 'Надпись10',
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
			name: 'Надпись13',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:348px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:348px;width:548px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись15',
			text: 'Заявка на сертификацию:',
			style: 'position:absolute;left:336px;top:101px;width:88px;height:27px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДокументОснование',
			style: 'position:absolute;left:424px;top:105px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Номенклатура:',
			style: 'position:absolute;left:8px;top:81px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номенклатура',
			style: 'position:absolute;left:96px;top:81px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись16',
			text: 'Серия:',
			style: 'position:absolute;left:336px;top:81px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СерияНоменклатуры',
			style: 'position:absolute;left:424px;top:81px;width:220px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:132px;width:636px;height:208px;',
			height: 208,width: 636,
			items:
			[
				{
					title:'Распределение по лабораториям',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:33px;width:622px;height:149px;',
			height: 149,width: 622,
			columns:
			[
				{
					text:'№',
					width:'28',
				},
				{
					text:'Сертифицирующее подразделение',
					width:'187',
				},
				{
					text:'Вид анализа',
					width:'95',
				},
				{
					text:'Количество',
					width:'97',
				},
				{
					text:'Ед. хранения',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:622px;height:24px;',
			items:
			[
			]
		},
					]
				},
				{
					title:'Пробы для внешней сертификации',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОрганПоСертификации',
			style: 'position:absolute;left:151px;top:6px;width:477px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Испытания',
			style: 'position:absolute;left:151px;top:31px;width:156px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КонтрольнаяПроба',
			style: 'position:absolute;left:505px;top:29px;width:123px;height:19px;',
		},
					]
				},
				{
					title:'Изъятие проб',
					items:
					[
		{
			xtype: 'textarea',
			hideLabel: true,
			name: 'РезультатНаружногоОсмотра',
			style: 'position:absolute;left:6px;top:27px;width:622px;height:50px;',
		},
		{
			xtype: 'textarea',
			hideLabel: true,
			name: 'ЗамечанияКУпаковкеМаркировке',
			style: 'position:absolute;left:6px;top:107px;width:622px;height:50px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКоличествоВскрытыхУпаковок',
			text: 'Количество вскрытых упаковок:',
			style: 'position:absolute;left:6px;top:162px;width:166px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КоличествоВскрытыхУпаковок',
			style: 'position:absolute;left:173px;top:162px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Температура',
			style: 'position:absolute;left:399px;top:162px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Влажность',
			style: 'position:absolute;left:548px;top:162px;width:80px;height:19px;',
		},
					]
				},
				{
					title:'Дополнительно',
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись6',
			text: 'Ответственный:',
			style: 'position:absolute;left:324px;top:27px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:412px;top:27px;width:216px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись12',
			text: 'Подразделение:',
			style: 'position:absolute;left:6px;top:27px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Подразделение',
			style: 'position:absolute;left:94px;top:27px;width:216px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись18',
			text: 'Количество образцов, отобранных для испытаний:',
			style: 'position:absolute;left:6px;top:27px;width:145px;height:27px;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Нормативный документ:',
			style: 'position:absolute;left:8px;top:101px;width:88px;height:27px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НормативныйДокумент',
			style: 'position:absolute;left:96px;top:105px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись17',
			text: 'Склад:',
			style: 'position:absolute;left:336px;top:57px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Склад',
			style: 'position:absolute;left:424px;top:57px;width:220px;height:19px;',
		},
	]
});