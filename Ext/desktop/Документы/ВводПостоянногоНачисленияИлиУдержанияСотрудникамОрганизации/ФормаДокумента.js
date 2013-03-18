Ext.define('Документы.ВводПостоянногоНачисленияИлиУдержанияСотрудникамОрганизации.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:643px;height:573px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: '',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:643px;height:25px;',
			items:
			[
				{
					text:'Списком сотрудников',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:548px;width:643px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'OK',
				},
				'-',
				{
					text:'Записать',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:329px;top:33px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:415px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'от',
			style: 'position:absolute;left:495px;top:33px;width:20px;height:19px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:515px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:33px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:94px;top:33px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Ответственный:',
			style: 'position:absolute;left:8px;top:57px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:94px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:208px;width:627px;height:309px;',
			height: 309,width: 627,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Начисления',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:17px;width:627px;height:24px;',
			items:
			[
				{
					text:'&Добавить',
				},
				'-',
				{
					text:'',
				},
				{
					text:'Изменить',
				},
				{
					text:'Удалить',
				},
				{
					text:'',
				},
				{
					text:'',
				},
				{
					text:'',
				},
				{
					text:'Конструктор настроек...',
				},
				{
					text:'',
				},
				'-',
				{
					text:'Подбор',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:41px;width:627px;height:262px;',
			height: 262,width: 627,
			columns:
			[
				{
					text:'№',
					width:'28',
				},
				{
					text:'Таб. №',
					width:'70',
				},
				{
					text:'Сотрудник',
					width:'100',
				},
				{
					text:'Показатель',
					width:'125',
				},
				{
					text:'Установлен',
					width:'80',
				},
				{
					text:'Установлена валюта',
					width:'45',
				},
				{
					text:'Показатель для ТР',
					width:'125',
				},
				{
					text:'Установлен тарифный разряд',
					width:'125',
				},
				{
					text:'Показатель',
					width:'125',
				},
				{
					text:'Установлен',
					width:'80',
				},
				{
					text:'Установлена валюта',
					width:'45',
				},
				{
					text:'Показатель для ТР',
					width:'125',
				},
				{
					text:'Установлен тарифный разряд',
					width:'125',
				},
				{
					text:'Показатель',
					width:'125',
				},
				{
					text:'Установлен',
					width:'80',
				},
				{
					text:'Установлена валюта',
					width:'45',
				},
				{
					text:'Показатель для ТР',
					width:'125',
				},
				{
					text:'Установлен тарифный разряд',
					width:'125',
				},
				{
					text:'Показатель',
					width:'125',
				},
				{
					text:'Установлен',
					width:'80',
				},
				{
					text:'Установлена валюта',
					width:'45',
				},
				{
					text:'Показатель для ТР',
					width:'125',
				},
				{
					text:'Установлен тарифный разряд',
					width:'125',
				},
				{
					text:'Показатель',
					width:'125',
				},
				{
					text:'Установлен',
					width:'80',
				},
				{
					text:'Установлена валюта',
					width:'45',
				},
				{
					text:'Показатель для ТР',
					width:'125',
				},
				{
					text:'Установлен тарифный разряд',
					width:'125',
				},
				{
					text:'Показатель',
					width:'125',
				},
				{
					text:'Установлен',
					width:'80',
				},
				{
					text:'Установлена валюта',
					width:'45',
				},
				{
					text:'Показатель для ТР',
					width:'125',
				},
				{
					text:'Установлен тарифный разряд',
					width:'125',
				},
				{
					text:'Документ основание',
					width:'100',
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:521px;width:73px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:87px;top:521px;width:548px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:10px;top:83px;width:624px;height:119px;',
			height: 119,width: 624,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидРасчета',
			style: 'position:absolute;left:296px;top:26px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаДействия',
			style: 'position:absolute;left:296px;top:72px;width:96px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаДействияКонец',
			style: 'position:absolute;left:420px;top:72px;width:96px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаНачала1',
			text: 'с:',
			style: 'position:absolute;left:282px;top:72px;width:11px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаДействияКонец',
			text: 'по:',
			style: 'position:absolute;left:397px;top:72px;width:20px;height:19px;text-align:left;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Внести или изменить начисление ',
			style: 'position:absolute;left:18px;top:25px;width:221px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Прекратить начисление',
			style: 'position:absolute;left:18px;top:48px;width:221px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Внести или изменить удержание ',
			style: 'position:absolute;left:18px;top:71px;width:221px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Прекратить удержание',
			style: 'position:absolute;left:18px;top:94px;width:221px;height:19px;',
		},
					]
				},
			]
		},
	]
});