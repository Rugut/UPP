Ext.define('Документы.ИзменениеПараметровНМАМеждународный.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:526px;height:421px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Изменение параметров эксплуатации НМА (международный)',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:510px;height:380px;',
			height: 380,width: 510,
			columns:
			[
				{
					text:'',
					width:'32',
				},
				{
					text:'Дата',
					width:'132',
				},
				{
					text:'Номер',
					width:'80',
				},
				{
					text:'Организация',
					width:'120',
				},
				{
					text:'Комментарий',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:526px;height:25px;',
			items:
			[
				{
					text:'Выбрать',
				},
				{
					text:'Выбрать',
				},
				'-',
				{
					text:'Структура подчиненности документа',
				},
				'-',
			]
		},
	]
});