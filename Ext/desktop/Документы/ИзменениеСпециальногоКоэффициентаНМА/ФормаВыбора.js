Ext.define('Документы.ИзменениеСпециальногоКоэффициентаНМА.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:589px;height:421px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Изменения понижающего коэффициента для расчета амортизации НМА (налоговый учет)',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:573px;height:380px;',
			height: 380,width: 573,
			columns:
			[
				{
					text:'',
					width:'32',
				},
				{
					text:'НУ',
					width:'20',
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
					width:'143',
				},
				{
					text:'Ответственный',
					width:'144',
				},
				{
					text:'Комментарий',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:589px;height:25px;',
			items:
			[
				'-',
				'-',
				{
					text:'Структура подчиненности документа',
				},
				{
					text:'Действие',
				},
				{
					text:'Движения документа по регистрам',
				},
			]
		},
	]
});