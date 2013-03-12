Ext.define('Справочники.Организации.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:594px;height:321px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Организации',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:578px;height:280px;',
			height: 280,width: 578,
			columns:
			[
				{
					text:'',
					width:'32',
				},
				{
					text:'Код',
					width:'40',
				},
				{
					text:'Префикс',
					width:'60',
				},
				{
					text:'Наименование',
					width:'220',
				},
				{
					text:'ИНН',
					width:'84',
				},
				{
					text:'КПП',
					width:'63',
				},
				{
					text:'Регистрационный номер ПФР',
					width:'98',
				},
				{
					text:'Головная организация',
					width:'350',
				},
				{
					text:'Полное наименование',
					width:'100',
				},
				{
					text:'Код по ОКПО',
					width:'70',
				},
				{
					text:'Код по ОКАТО',
					width:'77',
				},
				{
					text:'Код ИФНС',
					width:'28',
				},
				{
					text:'Юр. / физ. лицо',
					width:'100',
				},
				{
					text:'Районный коэффициент',
					width:'49',
				},
				{
					text:'Районный коэффициент РФ',
					width:'49',
				},
				{
					text:'Территориальные условия ПФР',
					width:'21',
				},
				{
					text:'Основной банковский счет',
					width:'350',
				},
				{
					text:'Вид ставок ЕСН и ПФР',
					width:'100',
				},
				{
					text:'Наименование плательщика при перечислении налогов',
					width:'350',
				},
				{
					text:'Отражать в регламентированном учете',
					width:'70',
				},
				{
					text:'ОП',
					width:'21',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:594px;height:25px;',
			items:
			[
				{
					text:'Действие11',
				},
				'-',
				{
					text:'Доступ к справочнику в целом',
				},
				{
					text:'Файлы',
				},
				'-',
			]
		},
	]
});