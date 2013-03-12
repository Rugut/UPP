Ext.define('Документы.СведенияОДоходахФизлиц.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:630px;height:580px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Сведения о доходах физических лиц для ИФНС',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьНомер',
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
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:196px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
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
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:555px;width:630px;height:25px;',
			items:
			[
				{
					text:'Получить файл на диск',
				},
				'-',
				{
					text:'OK',
				},
				{
					text:'Закрыть',
				},
				'-',
				'-',
				{
					text:'Записать',
				},
				{
					text:'Получить файл',
				},
				'-',
			]
		},
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'от:',
			style: 'position:absolute;left:176px;top:33px;width:20px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:8px;top:81px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:96px;top:81px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:527px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:527px;width:526px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:239px;width:614px;height:24px;',
			items:
			[
				{
					text:'Действие5',
				},
				{
					text:'физ.лицами, получавшими доходы',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие6',
				},
				'-',
				{
					text:'Подбор',
				},
				'-',
				{
					text:'Действие1',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие7',
				},
				'-',
				'-',
				{
					text:'Пронумеровать',
				},
				{
					text:'Действие',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:263px;width:614px;height:259px;',
			height: 259,width: 614,
			columns:
			[
				{
					text:'№',
					width:'28',
				},
				{
					text:'Физическое лицо',
					width:'220',
				},
				{
					text:'№ справки',
					width:'60',
				},
				{
					text:'Ставка',
					width:'40',
				},
				{
					text:'Код по ОКАТО',
					width:'80',
				},
				{
					text:'КПП',
					width:'80',
				},
				{
					text:'Передано на взыскание',
					width:'80',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьНалоговыйПериод',
			text: 'Налоговый период:',
			style: 'position:absolute;left:336px;top:57px;width:101px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НалоговыйПериод',
			style: 'position:absolute;left:437px;top:57px;width:82px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьТелефон',
			text: 'Телефон:',
			style: 'position:absolute;left:336px;top:105px;width:101px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КонтактныйТелефонОтветственного',
			style: 'position:absolute;left:437px;top:105px;width:82px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДолжностьОтветственного',
			text: 'Должность:',
			style: 'position:absolute;left:8px;top:105px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДолжностьОтветственного',
			style: 'position:absolute;left:96px;top:105px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИдентификаторФайла',
			style: 'position:absolute;left:267px;top:152px;width:252px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'ОбновитьИдентификаторФайла',
			text: '',
			style: 'position:absolute;left:519px;top:152px;width:22px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:630px;height:25px;',
			items:
			[
				{
					text:'',
				},
				'-',
				{
					text:'',
				},
				{
					text:'Движения документа по регистрам',
				},
				'-',
				'-',
				{
					text:'Действие5',
				},
				'-',
				{
					text:'',
				},
				{
					text:'Структура подчиненности документа',
				},
				{
					text:'',
				},
				'-',
				{
					text:'Действие1',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие1',
				},
				'-',
				'-',
				{
					text:'Действие',
				},
				'-',
				{
					text:'Действие3',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие2',
				},
				'-',
				{
					text:'Действие6',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие4',
				},
				{
					text:'Редактировать номер',
				},
				{
					text:'Действие7',
				},
				'-',
				'-',
				{
					text:'Действие3',
				},
				'-',
				{
					text:'Действие2',
				},
			]
		},
	]
});